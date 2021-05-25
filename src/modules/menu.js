import { ON_CLICK } from '../types/menu'

export const show = () => ({ type: ON_CLICK })

const initialState = {
    "한식" : [
                { 
                    menuId: 10,
                    categoryName: "든든한 국밥",
                    selected: false
                },
                {
                    menuId: 11,
                    categoryName: "맛있는 국밥",
                    selected: false
                },
                {
                    menuId: 12,
                    categoryName: "양많은 국밥",
                    selected: false
                }
    ],
    "양식" : [
                {
                    menuId: 20,
                    categoryName: "스테이크",
                    selected: false
                },
                {
                    menuId: 21,
                    categoryName: "햄버거",
                    selected: false
                }
    ],
    "채식" : [
                {
                    menuId: 80,
                    categoryName: "콩고기",
                    selected: false
                }
    ],
}
//중식 일식 분식 테마별 기타 채식

export default function menu(state = initialState, action) {
    switch (action.type) {
        case ON_CLICK:
            return state
        default:
            return state
    }
}
