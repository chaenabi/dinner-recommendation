import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RandomChoice from '../components/RandomChoice'
import { getAllMenu, randomClick } from '../modules/randomChoice'

const RandomChoiceContainer = () => {

    const randomChoice = useSelector(state => state.randomChoice)
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()
    const onRandomClick = useCallback(() => dispatch(randomClick()), [dispatch]) 
    useEffect(() => dispatch(getAllMenu(menu)), [dispatch])

    return (
        <div>
            <RandomChoice onRandomClick={onRandomClick} selectedRandomMenu={randomChoice}/>
        </div>
    )
}

export default RandomChoiceContainer
