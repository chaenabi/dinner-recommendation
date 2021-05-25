import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { select } from "../modules/category";
import { CategoryStyle } from '../styles/style'

const Category = ({ category }) => {
  const dispatch = useDispatch()
  const onSelect = useCallback((categoryId) => dispatch(select(categoryId)), [dispatch])
  return (
      category.map((item, index) => (
        <CategoryStyle key={index} selected={item.selected}>
          <p key={item.categoryId} onClick={() => onSelect(item.categoryId)}>{item.categoryName}</p>
        </CategoryStyle>
      ))
  )
}

export default Category