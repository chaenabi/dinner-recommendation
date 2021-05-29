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
        if (menu === undefined || menu === 'count') continue
        state[menu].map(element => element.menuName && menuArray.push(element.menuName))
    }
    let chosenMenu = []
    let taken = []
    let len = menuArray.length
    let n = count

    while (n--) {
        let x = Math.floor(Math.random() * len);
        chosenMenu[n] = menuArray[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }

    let res = []

    // need to refactoring ... someday ¯\(°_o)/¯
    for (let menu in state) { // get image src from menu state by searching
        if (menu === undefined || menu === 'count') continue
        state[menu].map(element => {
            chosenMenu.map(value => {
                if (value === element.menuName) { // if menu key equals value is chosen menuName randomly.
                    const { menuName, imageSrc } = element
                    res.push({ menuName, imageSrc })
                }
                return value
            })
            return element
        })
    }

    // bug happen sometimes: duplicate value inside res array. temporarily solve below function
    
    const result = res.filter((element, index, self) =>
            index === self.findIndex((t) => (
                t.menuName === element.menuName
            )))
    
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