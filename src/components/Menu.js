import React from 'react'
import { ImageStyle } from '../styles/style'

const Menu = ({ menu, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (menu === undefined) return <div>메뉴가 아직 준비되지 않았습니다.</div>
    
    return (
        <React.Fragment>
        {menu.map((food, index) => {
            return (<div key={index}>
                        <ImageStyle src={food.imageSrc} alt={food.menuName}/>
                        <p key={index}>{food.menuName}</p>
                    </div>)
        })}
        </React.Fragment>
    )
}

export default React.memo(Menu)
