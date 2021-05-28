import React from 'react'
import { MenuImageStyle } from '../styles/style'

const Menu = ({ menu, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    const clickedCategoryName = menu.clickedCategoryName
    if (menu[clickedCategoryName] === undefined) return <p>메뉴가 아직 준비되지 않았습니다.</p>
    const menus = menu[clickedCategoryName]
    return (
        <React.Fragment>
        {menus.map((food, index) => {
            return (<div key={index}>
                        <MenuImageStyle src={food.imageSrc} alt={food.imageSrc}/>
                        <p key={index}>{food.menuName}</p>
                    </div>)
        })}
        </React.Fragment>
    )
}

export default React.memo(Menu)
