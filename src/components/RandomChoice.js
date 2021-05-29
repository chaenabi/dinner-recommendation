import React, { useCallback, useState } from 'react'
import { RandomlyChosen } from '../styles/style'
import { RandomChoiceStyleBlock } from '../styles/style'
import { ImageStyle } from '../styles/style'

const RandomChoice = ({ onRandomClick, selectedRandomMenu }) => {
    const [ count, setCount ] = useState(1)
    const onChange = useCallback(e => {
        setCount(e.target.value)
    }, [count])

    // why rolled is Array? : array can shows multiple result, when it is needed.
    return (
        <React.Fragment>
        <RandomChoiceStyleBlock>
            <button onClick={() => onRandomClick(count)}>랜덤 고르기</button>
            &emsp;
            <input type='number' min='1' max='3' value={count} onChange={onChange} /> 개
        </RandomChoiceStyleBlock>
        <RandomlyChosen>
            { Array.isArray(selectedRandomMenu.rolled) && selectedRandomMenu.rolled.map((element, index)  =>
                                            (<React.Fragment key={index}><ImageStyle src={element.imageSrc} alt={element.menuName}/><p>{element.menuName}</p></React.Fragment>))}
        </RandomlyChosen>
        </React.Fragment>
    )
}

export default React.memo(RandomChoice)
