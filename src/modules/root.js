import { combineReducers } from "redux";
import category, { categorySaga } from './category'
import menu, { menuSaga } from './menu'
import randomChoice, { randomChoiceSaga } from './randomChoice'
import { all } from 'redux-saga/effects'

export const rootReducer = combineReducers({ category, menu, randomChoice })

export function* rootSaga() {
    yield all([ categorySaga(), menuSaga(), randomChoiceSaga() ])
}

