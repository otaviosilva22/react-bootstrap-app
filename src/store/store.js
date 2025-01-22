import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducers/userReducer";
import rootSaga from "./sagas/rootSaga";

// Criação do middleware Saga
const sagaMiddleware = createSagaMiddleware();

// Configuração da store
const store = configureStore({
  reducer: {
    user: userReducer, // Adicione mais reducers se necessário
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Rodar a rootSaga
sagaMiddleware.run(rootSaga);

export default store;
