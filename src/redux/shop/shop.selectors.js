import { createSelector } from "reselect";

const shopData = (state) => state.shop;
const collection_id_map = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectCollections = createSelector(
  [shopData],
  (shop) => shop.collections
);
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
