import { call, put } from 'redux-saga/effects'; // promise
import api from 'services/api';

import { addFavoriteSuccess, addFavoriteError } from 'store/actions/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);
    console.tron.log(response);
    yield put(addFavoriteSuccess(response.data));
  } catch (err) {
    yield put(addFavoriteError('Repositório não existe'));
  }
}
