import React from "react"

import VideoCollectionItem from "../video-collection-item/video-collection-item.component"

import "./video-collection-preview.styles.scss"

const VideoCollectionPreview = ({ title, items }) => (
  <div className="video-collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 3)
        .map(item => (
          <VideoCollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)

export default VideoCollectionPreview
