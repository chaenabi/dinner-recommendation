import { put, takeLatest } from '@redux-saga/core/effects'
import { GET_MENU } from '../types/menu'
import { ON_CLICK, ROLL_RANDOM } from '../types/randomChoice'

export const randomClick = (count) => ({ type: ON_CLICK, count })
const rollRandom = () => ({ type: ROLL_RANDOM })
export const getAllMenu = (menu) => ({ type: GET_MENU, menu })

function* showRandomSelectedSaga() {
    yield put(rollRandom())
}

export function* randomChoiceSaga() {
   yield takeLatest(ON_CLICK, showRandomSelectedSaga)
}

const initialState = []

const roll = (state, count) => {
    /* filter menuName by selected category by user */
    let menuArray = []
    for (let menu in state) {
        if (menu === undefined || menu === 'clickedCategoryName' || menu === 'count') continue
        state[menu].map(e => e.menuName && menuArray.push(e.menuName))
    }
    let result = []
    let taken = []
    let len = menuArray.length
    let n = count

    while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = menuArray[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    
    return result
}

let count = 1;

export default function randomChoice(state = initialState, action) {
    switch (action.type) {
        case GET_MENU:
            if (!action.menu)
                return state
            return action.menu
        case ROLL_RANDOM:
            const rolled = roll(state, count)
            return { ...state, rolled }
        case ON_CLICK:
            if (action.count !== undefined) {
                count = action.count
                return { ...state, count }
            }
            else return { ...state, count }
        default:
            return { ...state, count }
    }
}