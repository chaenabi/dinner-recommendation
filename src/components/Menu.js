import React from 'react'

const Menu = ({ categoryName, menu }) => {
    if (menu[categoryName] === undefined) return <div>아직 메뉴가 추가되지 않았어요. 조금만 기다려주세요 </div>
    return (
        <div>
            {menu[categoryName].map(element => {
                return <p key={element.menuId}>{element.categoryName}</p>
            })}
        </div>
    )
}

export default Menu
