// store/sagas/rootSaga.js

import { all } from "redux-saga/effects";
import userSagas from "./userSagas";

export default function* rootSaga() {
  yield all([userSagas()]); // Combine várias sagas aqui
}
