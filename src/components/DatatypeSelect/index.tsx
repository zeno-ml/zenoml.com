import React, { useState } from "react";
import MediaSelect from "@site/src/components/MediaSelect";

type DataItem = {
  select: string;
  images?: string[];
};

const DataList: DataItem[] = [
  {
    select: "Image Classification",
    images: [
      require("@site/static/img/image-classification/1.png").default,
      require("@site/static/img/image-classification/2.png").default,
      require("@site/static/img/image-classification/3.png").default,
      require("@site/static/img/image-classification/4.png").default,
    ],
  },
  {
    select: "Audio Transcription",
    images: [
      require("@site/static/img/audio-transcription/1.png").default,
      require("@site/static/img/audio-transcription/2.png").default,
      require("@site/static/img/audio-transcription/3.png").default,
    ],
  },
  {
    select: "Activity Recognition",
    images: [
      require("@site/static/img/activity-recognition/1.png").default,
      require("@site/static/img/activity-recognition/2.png").default,
      require("@site/static/img/activity-recognition/3.png").default,
    ],
  },
  {
    select: "Your custom data type",
  },
];

export default function DatatypeSelect() {
  return <MediaSelect default="Image Classification" list={DataList} />;
}
