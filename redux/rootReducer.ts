"use client";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import appReducer from "./slice/app";
const rootPersistConfig = {
  key: "root",
  storage,
  keyprefix: "redux-",
  // whiteList:[],
  // blackList:[]
};

const rootReducer = combineReducers({
  app: appReducer,
});

export { rootReducer, rootPersistConfig };
