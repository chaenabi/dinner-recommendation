import { GET_MENU } from '../types/menu'
// import { takeEvery, put } from 'redux-saga/effects'

const initialState = {
    "한식" : [
                { 
                    menuId: 10,
                    menuName: "든든한 국밥",
                    selectedMenu: false
                },
                {
                    menuId: 11,
                    menuName: "맛있는 국밥",
                    selectedMenu: false
                },
                {
                    menuId: 12,
                    menuName: "양많은 국밥",
                    selectedMenu: false
                }
    ],
    "양식" : [
                {
                    menuId: 20,
                    menuName: "스테이크",
                    selectedMenu: false
                },
                {
                    menuId: 21,
                    menuName: "햄버거",
                    selectedMenu: false
                }
    ],
    "채식" : [
                {
                    menuId: 80,
                    menuName: "콩고기",
                    selectedMenu: false
                }
    ],
}
//중식 일식 분식 테마별 기타 채식

export const showMenu = (clickedCategoryName) => ({ type: GET_MENU, clickedCategoryName })

// function* getMenuSaga() {
//     yield put(showMenu())
// }

export function* menuSaga() {
//    yield takeEvery(GET_MENU, getMenuSaga)
}

export default function menu(state = initialState, action) {
    switch (action.type) {
        case GET_MENU:
        default:
            return { ...state, clickedCategoryName: action.clickedCategoryName }
    }
}
