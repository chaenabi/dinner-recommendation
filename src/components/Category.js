import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { select } from "../modules/category";
import { CategoryStyle } from '../styles/style'

const Category = ({ category }) => {

  const dispatch = useDispatch()
  const onSelect = useCallback(() => dispatch(select()), [dispatch])

  return (
      category.map((item, index) => (
        <CategoryStyle key={index}>
          <p onClick={onSelect} key={index}>{item.name}</p>
        </CategoryStyle>
      ))
  )
}

export default Category