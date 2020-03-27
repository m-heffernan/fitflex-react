import React from "react"

import ReactPlayer from "react-player"

import "./collection-item.styles.scss"

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
          forceHLS: true,
        },
      }}
    />
    {/* <iframe
      className="video"
      src="https://player.cloudinary.com/embed/?cloud_name=fitflex&public_id=fitflex%2Ffitflex_test1&fluid=true&controls=true&colors%5Baccent%5D=%23bc0cff&show_jump_controls=true&hide_context_menu=true&source_types%5B0%5D=hls"
      width="640"
      height="480"
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      allowfullscreen
      frameborder="0"
    ></iframe> */}
    {/* <Video
      className="video"
      cloudName="fitflex"
      publicId={videoId}
      controls="true"
    ></Video> */}
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
)

export default CollectionItem
