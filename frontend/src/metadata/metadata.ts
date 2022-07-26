import type ColumnTable from "arquero/dist/types/table/column-table";

import * as aq from "arquero";
import {
	interpolatePurples,
	schemeCategory10,
	schemeDark2,
} from "d3-scale-chromatic";

import { columnHash } from "../util/util";
import { interpolateColorToArray } from "../discovery/discovery";

export enum ChartType {
	Count,
	Histogram,
	Binary,
	Other,
}

interface IComputeDomain {
	type: ChartType;
	table: ColumnTable;
	column: string | ZenoColumn;
}

interface ISpecificDomain {
	table: ColumnTable;
	column: string;
}

export function computeDomain({ type, table, column }: IComputeDomain) {
	const hash = typeof column === "string" ? column : columnHash(column);

	let specificDomainFunc: (input: ISpecificDomain) => {
		domain: object[];
		assignments: number[];
	};

	switch (type) {
		case ChartType.Count:
			specificDomainFunc = computeCountDomain;
			break;
		case ChartType.Histogram:
			specificDomainFunc = computeHistogramDomain;
			break;
		case ChartType.Binary:
			specificDomainFunc = computeBinaryDomain;
			break;
		case ChartType.Other:
			specificDomainFunc = computeOtherDomain;
			break;
		default:
			specificDomainFunc = computeOtherDomain;
			break;
	}

	const result = specificDomainFunc({ table, column: hash });
	return result;
}

function computeCategoricalDomain({ table, column }: ISpecificDomain) {
	const categoryGroups = table.groupby(column);
	const categoryKeys = categoryGroups.groups().keys;
	const categoryData = categoryGroups.count();
	const output = {
		category: categoryData.columnArray(column),
		count: categoryData.columnArray("count"),
	};
	return { domain: combineOutputOneArray(output), assignments: categoryKeys };
}

function computeCountDomain({ table, column }: ISpecificDomain) {
	const output = computeCategoricalDomain({ table, column });
	return output;
}

function computeBinaryDomain({ table, column }: ISpecificDomain) {
	const output = computeCategoricalDomain({ table, column });
	return output;
}

function computeContinuousBinnedDomain({ table, column }: ISpecificDomain) {
	const bins = binTable(table, column);
	return {
		domain: combineOutputOneArray(bins.output),
		assignments: bins.assignments,
	};
}

function computeHistogramDomain({ table, column }: ISpecificDomain) {
	const output = computeContinuousBinnedDomain({ table, column });
	return output;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function computeOtherDomain({ table, column }: ISpecificDomain) {
	return { domain: [], assignments: [] };
}

function combineOutputOneArray(obj: object) {
	const key = 0,
		array = 1;
	const entries = Object.entries(obj);
	const length = entries[0][array].length;

	const combinedArray = [];
	for (let i = 0; i < length; i++) {
		const combinedObject = {};
		for (let j = 0; j < entries.length; j++) {
			const entry = entries[j];
			combinedObject[entry[key]] = entry[array][i];
		}
		combinedArray.push(combinedObject);
	}

	return combinedArray;
}

function binStartEndFormat(binsUgly: number[]) {
	const inc = binsUgly[1];
	const formatted = [];
	let i = 0,
		k = 1;
	while (k < binsUgly.length) {
		const binStart = binsUgly[i];
		const binEnd = binsUgly[k];
		formatted.push({ binStart, binEnd });
		i++;
		k++;
	}
	const binStart = binsUgly[i];
	const binEnd = binStart + inc;
	formatted.push({ binStart, binEnd });
	return formatted;
}

function binTable(table: ColumnTable, column: string) {
	const binName = `bin_${column}`;
	const countName = "count";

	const binGroups = table.groupby({
		[binName]: aq.bin(column, { maxbins: 20 }),
	});
	const binKeys = binGroups.groups().keys;
	const binnedOutput = binGroups
		.count({ as: countName })
		.impute({ count: () => 0 })
		.orderby(binName);

	const binsNice = binStartEndFormat(
		binnedOutput.columnArray(binName) as number[]
	);
	const output = {
		binStart: binsNice.map((bin) => bin.binStart),
		binEnd: binsNice.map((bin) => bin.binEnd),
		count: binnedOutput.columnArray(countName),
	};

	return { output, assignments: binKeys };
}

function countColumn({ table, filterQuery }) {
	const count = table.filter(filterQuery).count().object()["count"];
	return count;
}

function countColumnByBin({
	table,
	column,
	binStart,
	binEnd,
}: {
	table: ColumnTable;
	column: string;
	binStart: number;
	binEnd: number;
}) {
	const count = countColumn({
		table,
		filterQuery: `(d) => d['${column}'] >= ${binStart} && d['${column}'] < ${binEnd}`,
	});
	return count;
}

function countColumnByCategory({
	table,
	column,
	category,
}: {
	table: ColumnTable;
	column: string;
	category: string | number;
}) {
	const count = countColumn({
		table,
		filterQuery: `(d) => d['${column}'] == '${category}'`,
	});
	return count;
}

export function countDomainCategorical({
	table,
	domain,
	column,
}: {
	table: ColumnTable;
	domain: object[];
	column: string;
}) {
	const counts = domain.map((d) => {
		return {
			count: countColumnByCategory({ table, column, category: d["category"] }),
		};
	});
	return counts;
}

export function countDomainContinuousBins({
	table,
	domain,
	column,
}: {
	table: ColumnTable;
	domain: object[];
	column: string;
}) {
	const counts = domain.map((d) => {
		return {
			count: countColumnByBin({
				table,
				column,
				binStart: d["binStart"],
				binEnd: d["binEnd"],
			}),
		};
	});
	return counts;
}

export function computeCountsFromDomain({
	table,
	column,
	domain,
	type,
}: {
	table: ColumnTable;
	column: string;
	domain: object[];
	type: ChartType;
}) {
	const hash = typeof column === "string" ? column : columnHash(column);
	if (domain.length === 0) {
		return [];
	}

	if (type === ChartType.Count || type === ChartType.Binary) {
		return countDomainCategorical({ table, domain, column: hash });
	} else if (type === ChartType.Histogram) {
		return countDomainContinuousBins({ table, domain, column: hash });
	} else {
		return [];
	}
}

export function colorDomain({
	domain,
	type,
}: {
	domain: object[];
	type: ChartType;
}) {
	if (domain.length > 0) {
		if (type === ChartType.Count || type === ChartType.Binary) {
			let colors = [...schemeCategory10, ...schemeDark2].slice(
				0,
				domain.length
			);
			if (domain.length === 2) {
				colors = [schemeCategory10[3], schemeCategory10[0]]; // red and blue
			}
			domain.forEach((d, i) => (d["color"] = colors[i]));
		} else if (type === ChartType.Histogram) {
			const numBins = domain.length;
			const colors = interpolateColorToArray({
				colorer: interpolatePurples,
				length: numBins,
				range: [0.15, 1.0],
			});
			domain.forEach((d, i) => (d["color"] = colors[i]));
		}
	}
}
export function assignColorsFromDomain({
	table,
	domain,
	assignments,
	idColumn,
	column,
	type,
}: {
	table: ColumnTable;
	domain: object[];
	assignments: number[];
	idColumn: ZenoColumn | string;
	column: ZenoColumn | string;
	type: ChartType;
}) {
	if (domain.length > 0) {
		if (!("color" in domain[0])) {
			colorDomain({ domain, type });
		}
		const hash = typeof column === "string" ? column : columnHash(column);
		const idHash =
			typeof idColumn === "string" ? idColumn : columnHash(idColumn);
		const ids = table.columnArray(idHash);
		const colorLabels = new Array(assignments.length);
		for (let i = 0; i < assignments.length; i++) {
			colorLabels[i] = {
				id: ids[i],
				colorIndex: assignments[i],
			};
		}
		const output = {
			labels: colorLabels,
			colors: domain.map((d) => d["color"]),
			hash,
		};
		return output;
	}
}