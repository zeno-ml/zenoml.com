import React, { useRef } from "react";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

import video from "@site/static/img/teaser.mp4";

export function Demo() {
    let videoRef = useRef();
  
    function setPlayback() {
      if (videoRef) {
        videoRef.current.playbackRate = 1.25;
      }
    }
  
    return (<div className={styles.demo}>
                <video
                ref={videoRef}
                controls
                width="100%"
                onCanPlay={() => setPlayback()}
                >
                <source src={video} type="video/mp4"></source>
                </video>
            </div>)
}