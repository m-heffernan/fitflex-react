import React from "react"

import ReactPlayer from "react-player"

import "./collection-item.styles.scss"

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

const CollectionItem = ({ id, name, price, videoUrl }) => (
  <div className="collection-item">
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
      <span className="price">{price}</span>
    </div>
  </div>
)

export default CollectionItem
