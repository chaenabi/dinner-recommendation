import { GET_MENU } from '../types/menu'
// import { takeEvery, put } from 'redux-saga/effects'
import denjang from '../images/denjangjjige.jpg'
import kimchi from '../images/kimchijjige.jpg'

const initialState = {
    "한식" : [
                { 
                    menuId: 10,
                    menuName: "든든한 국밥",
                    imageSrc: denjang,
                    selectedMenu: false
                },
                {
                    menuId: 11,
                    menuName: "신기한 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 12,
                    menuName: "양많은 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 13,
                    menuName: "맛없는 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 14,
                    menuName: "맛있는 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 15,
                    menuName: "굉장한 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 16,
                    menuName: "신기한 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 17,
                    menuName: "양많은 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 18,
                    menuName: "맛없는 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 19,
                    menuName: "맛있는 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 20,
                    menuName: "굉장한 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                { 
                    menuId: 21,
                    menuName: "든든한 국밥",
                    imageSrc: denjang,
                    selectedMenu: false
                },
                {
                    menuId: 22,
                    menuName: "신기한 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 23,
                    menuName: "양많은 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 24,
                    menuName: "맛없는 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 25,
                    menuName: "맛있는 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 26,
                    menuName: "굉장한 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 27,
                    menuName: "신기한 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 28,
                    menuName: "양많은 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 29,
                    menuName: "맛없는 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 30,
                    menuName: "맛있는 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 31,
                    menuName: "굉장한 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 32,
                    menuName: "굉장한 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 33,
                    menuName: "신기한 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 34,
                    menuName: "양많은 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 35,
                    menuName: "맛없는 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 36,
                    menuName: "맛있는 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },
                {
                    menuId: 37,
                    menuName: "굉장한 국밥",
                    imageSrc: kimchi,
                    selectedMenu: false
                },

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
            if (!action.clickedCategoryName)
                return { ...state, clickedCategoryName: state.clickedCategoryName }
            return { ...state, clickedCategoryName: action.clickedCategoryName }
    }
}
