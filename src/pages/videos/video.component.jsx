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

import WithSpinner from "../../components/with-spinner/with-spinner.component"

const VideoOverviewWithSpinner = WithSpinner(VideoCollectionsOverview)
const VideoPageWithSpinner = WithSpinner(VideoCollectionPage)

class VideoPage extends React.Component {
  state = {
    loading: true,
  }

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
    const { loading } = this.state

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <VideoOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <VideoPageWithSpinner isLoading={loading} {...props} />
          )}
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
