
import { legacy_createStore as createstore, applyMiddleware } from "redux";

import logger from "redux-logger";
import MyReducer from "./reducer";




export const myStore = createstore( MyReducer  , applyMiddleware(logger));
