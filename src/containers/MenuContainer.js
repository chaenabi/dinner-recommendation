import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import Menu from '../components/Menu'
import Pagination from '../components/Pagination'
import { MenuStyleGrid, MenuStyleBlock } from '../styles/style'

const MenuContainer = () => {
    const category = useSelector(state => state.category)
    const menu = useSelector(state => state.menu)

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)
    const paginate = useCallback((pageNumber) => setCurrentPage(pageNumber), [currentPage]);

    return (
        <React.Fragment>
        <MenuStyleBlock>
            <MenuStyleGrid>
                {category.map((element, index) => element.selected && 
                                <React.Fragment key={index}>
                                    <Menu menu={menu} key={element.categoryId} loading={loading} />
                                </React.Fragment>
                            )}
            </MenuStyleGrid>
        </MenuStyleBlock>
        <Pagination postsPerPage={postsPerPage} totalPosts={menu.length} paginate={paginate}/>
        </React.Fragment>
    )
}

export default React.memo(MenuContainer)
