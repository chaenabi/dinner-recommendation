import { put, takeLatest } from '@redux-saga/core/effects'
import { GET_MENU } from '../types/menu'
import { ON_CLICK, ROLL_RANDOM } from '../types/randomChoice'

export const randomClick = () => ({ type: ON_CLICK })
const rollRandom = () => ({ type: ROLL_RANDOM })
export const getAllMenu = (menu) => ({ type: GET_MENU, menu })

function* showRandomSelectedSaga() {
    yield put(rollRandom())
}

export function* randomChoiceSaga() {
   yield takeLatest(ON_CLICK, showRandomSelectedSaga)
}

const initialState = []

const roll = (state) => {
    /* filter menuName by selected category by user */
    let menuArray = []
    for (let menu in state) {
        if (menu === undefined || menu === 'clickedCategoryName') continue
        state[menu].map(e => e.menuName && menuArray.push(e.menuName))
    }

    return menuArray.splice(Math.floor(Math.random() * menuArray.length), 1)
}

export default function randomChoice(state = initialState, action) {
    switch (action.type) {
        case GET_MENU:
            if (!action.menu)
                return state
            return action.menu
        case ROLL_RANDOM:
            const rolled = roll(state)
            return { ...state, rolled }
        case ON_CLICK:
        default:
            return state
    }
}