import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = 
    createSelector(
        [selectShop], 
        (shop) => shop.collections);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    colletions => Object.keys(colletions).map(key => colletions[key])
)

export const selectCollection = memoize(collectionUrlParam => 
    createSelector (
        [selectCollections],
        collections => collections[collectionUrlParam]
    ));