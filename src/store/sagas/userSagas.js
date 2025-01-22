// store/sagas/userSagas.js

import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER_REQUEST,
  fetchUserSuccess,
  fetchUserFailure,
} from "../actions/userActions";

// Mock de uma API para obter dados de usuário
const fetchUserFromApi = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "John Doe" }), 1000)
  );

function* fetchUserSaga() {
  try {
    const user = yield call(fetchUserFromApi);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure("Erro ao buscar usuário"));
  }
}

export default function* userSagas() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
}
