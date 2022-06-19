import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { formReducer } from "./form.reducer";

export const store = legacy_createStore(formReducer, applyMiddleware(thunk));
