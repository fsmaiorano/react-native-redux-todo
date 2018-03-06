import { all, takeLatest } from 'redux-saga/effects';

import { addFavoriteRquest } from './favorites';

export default function* rootSaga() {
  return yield all([
    takeLatest('ADD_FAVORITE_REQUEST', addFavoriteRquest),
  ]);
}
