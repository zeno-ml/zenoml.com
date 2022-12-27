import React, { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import MediaSelect from "@site/src/components/MediaSelect";

type DataItem = {
  select: string;
  extra: string;
  video: React.ComponentType<React.ComponentProps<"svg">>;
};

const DataList: DataItem[] = [
  {
    select: "Image",
    extra: "100 users",
    video: require("@site/static/img/exploration.mp4").default,
  },
  {
    select: "Audio",
    extra: "300 users",
    video: require("@site/static/img/exploration.mp4").default,
  },
  {
    select: "other label",
    extra: "300 users",
    video: require("@site/static/img/exploration.mp4").default,
  },
  {
    select: "other label",
    extra: "300 users",
    video: require("@site/static/img/exploration.mp4").default,
  },
  {
    select: "other label",
    extra: "300 users",
    video: require("@site/static/img/exploration.mp4").default,
  },
];

export default function DatatypeSelect() {
  return <MediaSelect default="Image" list={DataList} />;
}
