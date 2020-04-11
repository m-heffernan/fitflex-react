import React from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"

import VideoCollectionsOverview from "../../components/video-collections-overview/video-collections-overview.component"
import VideoCollectionPage from "../video-collection/video-collection.component"

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils"

import { updateCollections } from "../../redux/shop/shop.actions"

class VideoPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection("videos")

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={VideoCollectionsOverview}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={VideoCollectionPage}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(VideoPage)
