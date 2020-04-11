import React from "react"

import ReactPlayer from "react-player"

import "./video-collection-item.styles.scss"

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

const VideoCollectionItem = ({ item }) => {
  const { name, videoUrl } = item
  return (
    <div className="video-collection-item">
      <ReactPlayer
        className="react-player"
        url={videoUrl}
        controls
        width="100%"
        height="100%"
        config={{
          file: {
            forceHLS: !isSafari,
            forceVideo: true,
          },
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
      </div>
    </div>
  )
}

export default VideoCollectionItem
