import { initialCategoryState, ON_SELECT } from '../types/category'
import { put, takeLatest } from 'redux-saga/effects'
import { showMenu } from '../modules/menu'

export const select = (categoryId, clickedCategoryName) => ({ type: ON_SELECT, categoryId, clickedCategoryName })

function* selectSaga(action) {
    const clickedCategoryName = yield action.clickedCategoryName
    yield put(showMenu(clickedCategoryName))
}

export function* categorySaga() {
    yield takeLatest(ON_SELECT, selectSaga)
}

export default function category(state = initialCategoryState, action) {
    switch (action.type) {
        case ON_SELECT:
            return state.map((element) => { 
                return {
                    ...element,
                    selected: element.categoryId === action.categoryId
                }
            })
        default:
            return state
    }
}
