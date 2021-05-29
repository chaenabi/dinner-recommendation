import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RandomChoice from '../components/RandomChoice'
import { getAllMenu, randomClick } from '../modules/randomChoice'


const RandomChoiceContainer = () => {

    const randomChoice = useSelector(state => state.randomChoice)
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()

    const onRandomClick = useCallback((count) => {
        if (count < 1 || count >= 4) {
            alert(`랜덤하게 고를 수 있는 메뉴는 3개까지 고를 수 있어요. 한 개만 골라서 보여드릴게요.`)
            count = 1
        }
        dispatch(randomClick(count))
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllMenu(menu))
    }, [dispatch])

    return (
        <div>
            <RandomChoice onRandomClick={onRandomClick} selectedRandomMenu={randomChoice}/>
        </div>
    )
}

export default React.memo(RandomChoiceContainer)