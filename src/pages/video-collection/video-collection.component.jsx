import React from "react"
import { connect } from "react-redux"

import VideoCollectionItem from "../../components/video-collection-item/video-collection-item.component"

import { selectCollection } from "../../redux/shop/shop.selectors"

import "../shop-collection/collection.styles.scss"
import "./video-collection.styles.scss"

const VideoCollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <VideoCollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(VideoCollectionPage)
