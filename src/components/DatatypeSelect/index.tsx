import MediaSelect from "@site/src/components/MediaSelect";
import React from "react";

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
];

export default function DatatypeSelect() {
  return (
    <div>
      <MediaSelect default="Image Classification" list={DataList} />
    </div>
  );
}
