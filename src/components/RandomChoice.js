import React, { useCallback, useState } from 'react'

const RandomChoice = ({ onRandomClick, selectedRandomMenu }) => {
    const [ count, setCount ] = useState(1)

    const onChange = useCallback(e => {
        setCount(e.target.value)
    }, [count])

    // why rolled is Array? : array can shows multiple result, when it is needed.
    return (
        <div>
            <button onClick={() => onRandomClick(count)}>랜덤으로 고르기</button>
            <input type='number' min='1' max='3' value={count} onChange={onChange} /> 개
            { Array.isArray(selectedRandomMenu.rolled) && selectedRandomMenu.rolled.map((element, index)  => <p key={index}>{element}</p>)}
        </div>
    )
}

export default React.memo(RandomChoice)
