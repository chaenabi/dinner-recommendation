import React from "react";
import { CategoryStyle } from '../styles/style'

const Category = ({ category, onSelect }) => {
  return (
      category.map((item, index) => (
        <CategoryStyle key={index} selected={item.selected}>
          <p key={item.categoryId} onClick={() => onSelect(item.categoryId, item.categoryName)}>{item.categoryName}</p>
        </CategoryStyle>
      ))
  )
}

export default Category