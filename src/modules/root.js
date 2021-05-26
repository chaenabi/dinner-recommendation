import { combineReducers } from "redux";
import category, { categorySaga } from './category'
import menu, { menuSaga } from './menu'
import { all } from 'redux-saga/effects'

export const rootReducer = combineReducers({ category, menu })

export function* rootSaga() {
    yield all([ categorySaga(), menuSaga() ])
}

