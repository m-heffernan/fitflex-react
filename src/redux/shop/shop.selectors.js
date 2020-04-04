import { createSelector } from "reselect"

const COLLECTION_ID_MAP = {
  circuit: 1,
  bike: 2,
  stretch: 3,
  cardio: 4,
  shop: 5,
}

const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
