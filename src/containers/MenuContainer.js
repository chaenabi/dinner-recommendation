import React from 'react'
import { useSelector } from 'react-redux'
import Menu from '../components/Menu'

const MenuContainer = () => {
    const category = useSelector(state => state.category)
    const menu = useSelector(state => state.menu)

    return (
        <div>
            {category.map((element) => element.selected && <Menu menu={menu} key={element.categoryId}/>)}
        </div>
    )
}

export default React.memo(MenuContainer)
