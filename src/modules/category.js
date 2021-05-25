import { ON_SELECT } from '../types/category'

export const select = () => ({ type: ON_SELECT })

const initialState = [
    { id: 1, name: "한식" },
    { id: 2, name: "양식" },
    { id: 3, name: "중식" },
    { id: 4, name: "일식" },
    { id: 5, name: "분식" },
    { id: 6, name: "테마별" },
    { id: 7, name: "기타" },
    { id: 8, name: "채식" }
]

export default function category(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
