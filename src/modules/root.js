import { combineReducers } from "redux";
import category from './category'
import menu from './menu'

export const rootReducer = combineReducers({ category, menu })