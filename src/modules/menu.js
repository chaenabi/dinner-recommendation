import { GET_MENU, initialMenuState } from '../types/menu'

export const showMenu = (clickedCategoryName) => ({ type: GET_MENU, clickedCategoryName })

export function* menuSaga() {}

export default function menu(state = initialMenuState, action) {
    switch (action.type) {
        case GET_MENU:
        default:
            if (!action.clickedCategoryName)
                return { ...state, clickedCategoryName: state.clickedCategoryName }
            return { ...state, clickedCategoryName: action.clickedCategoryName }
    }
}
