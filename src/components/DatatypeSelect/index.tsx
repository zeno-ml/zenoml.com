import React, { useState } from "react";
import MediaSelect from "@site/src/components/MediaSelect";

type DataItem = {
  select: string;
  video: React.ComponentType<React.ComponentProps<"svg">>;
};

const DataList: DataItem[] = [
  {
    select: "Image Classification",
    video: require("@site/static/img/image-instances.png").default,
  },
  {
    select: "Audio Transcription",
    video: require("@site/static/img/audio-instances.png").default,
  },
  {
    select: "Activity Recognition",
    video: require("@site/static/img/sensor-instances.png").default,
  },
  {
    select: "Your custom data",
    video: require("@site/static/img/sensor-instances.png").default,
  },
];

export default function DatatypeSelect() {
  return <MediaSelect default="Image Classification" list={DataList} />;
}
