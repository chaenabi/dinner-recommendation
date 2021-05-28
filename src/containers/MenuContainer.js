import React from 'react'
import { useSelector } from 'react-redux'
import Menu from '../components/Menu'
import { MenuStyleBlock } from '../styles/style'

const MenuContainer = () => {
    const category = useSelector(state => state.category)
    const menu = useSelector(state => state.menu)

    return (
        <MenuStyleBlock>
            {category.map((element) => element.selected && <Menu menu={menu} key={element.categoryId}/>)}
        </MenuStyleBlock>
    )
}

export default React.memo(MenuContainer)
