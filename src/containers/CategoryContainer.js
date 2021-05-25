import React from "react";
import { useSelector } from "react-redux";
import Category from "../components/Category";
import { CategoryStyleBlock } from '../styles/style'

const CategoryContainer = () => {
  const category = useSelector(state => state.category)

  return (
    <CategoryStyleBlock>
        <Category category={category} />
    </CategoryStyleBlock>
  )
}

export default CategoryContainer
