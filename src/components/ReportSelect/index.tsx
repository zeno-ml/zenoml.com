import React, {useState} from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import MediaSelect from "@site/src/components/MediaSelect";

type ReportItem = {
  select: string;
  extra: string;
  video: React.ComponentType<React.ComponentProps<"svg">>;
};

const ReportList: ReportItem[] = [
  {
    select: "Table",
    extra: "100 users",
    video: require("@site/static/img/exploration.mp4").default,
  },
  {
    select: "Matrix",
    extra: "300 users",
    video: require("@site/static/img/exploration.mp4").default,
  },
  {
    select: "other report",
    extra: "300 users",
    video: require("@site/static/img/exploration.mp4").default,
  },
  {
    select: "other report",
    extra: "300 users",
    video: require("@site/static/img/exploration.mp4").default,
  }
];

export default function DatatypeSelect() {
  return (
    <MediaSelect
      default="Table"
      list={ReportList}
    />
  );
}
