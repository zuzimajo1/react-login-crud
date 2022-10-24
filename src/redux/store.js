import { createStore } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authRedux from "./reducers/authRedux";
import usersRedux from "./reducers/usersRedux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
    auth: authRedux,
    users: usersRedux,

})

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);







