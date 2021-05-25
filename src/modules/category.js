import { ON_SELECT } from '../types/category'

export const select = () => ({ type: ON_SELECT })

const initialState = {}

export default function category(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
