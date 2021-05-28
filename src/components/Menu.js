import React from 'react'

const Menu = ({ menu }) => {
    const clickedCategoryName = menu.clickedCategoryName
    if (menu[clickedCategoryName] === undefined) return <p>메뉴가 아직 준비되지 않았습니다.</p>
    return (
        <div>
            {menu[clickedCategoryName].map((food, index) => <p key={index}>{food.menuName}</p>)}
        </div>
    )
}

export default React.memo(Menu)
