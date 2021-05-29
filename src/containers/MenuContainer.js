import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Menu from '../components/Menu'
import Pagination from '../components/Pagination'
import { MenuStyleGrid, MenuStyleBlock } from '../styles/style'

const MenuContainer = () => {
    const category = useSelector(state => state.category)
    const menu = useSelector(state => state.menu)

    const [loading] = useState(false)
    const [postsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategoryName, setSelectedCategoryName] = useState()

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    const currentPosts = (tmp) => {
        if (tmp) {
            let currentPosts = 0;
            currentPosts = tmp.slice(indexOfFirst, indexOfLast);
            return currentPosts;
        }
        return;
    }

    useEffect(() => {
       setSelectedCategoryName(prev => {
            const changedCategoryName = menu['clickedCategoryName']
            if (prev !== changedCategoryName) {
                setCurrentPage(1)
                return changedCategoryName
            }
            return selectedCategoryName
        })
    })

    let totalSelected, isSelected = false;
    let clickedCategoryName = menu['clickedCategoryName']
    if (clickedCategoryName) {
        if (menu[clickedCategoryName]) {
            totalSelected = menu[clickedCategoryName].length
        }
        isSelected = true
    }

    return (
        <React.Fragment>
        <MenuStyleBlock>
            <MenuStyleGrid>
                {category.map((element) => element.selected &&
                                <Menu menu={currentPosts(menu[menu['clickedCategoryName']])} key={element.categoryId} loading={loading}/>
                )}
            </MenuStyleGrid>
        </MenuStyleBlock>
        {isSelected && totalSelected && <Pagination postsPerPage={postsPerPage} totalPosts={totalSelected} paginate={setCurrentPage}></Pagination>}
        </React.Fragment>
    )
}

export default React.memo(MenuContainer)
