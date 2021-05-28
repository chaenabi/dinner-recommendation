import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../components/Category";
import { select } from "../modules/category";
import { CategoryStyleBlock } from '../styles/style'

const CategoryContainer = () => {
  const category = useSelector(state => state.category)
  const dispatch = useDispatch()
  const onSelect = useCallback((categoryId, categoryName) => dispatch(select(categoryId, categoryName)), [dispatch])

  return (
    <CategoryStyleBlock>
        <Category category={category} onSelect={onSelect} />
    </CategoryStyleBlock>
  )
}

export default CategoryContainer
