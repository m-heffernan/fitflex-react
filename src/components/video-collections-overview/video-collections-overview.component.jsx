import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import VideoCollectionPreview from "../video-collection-preview/video-collection-preview.component"

import "./video-collections-overview.styles.scss"

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors"

import "../collections-overview/collections-overview.styles.scss"

const VideoCollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <VideoCollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(VideoCollectionsOverview)
