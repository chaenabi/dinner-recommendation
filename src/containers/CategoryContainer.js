import React from "react";
import { useSelector } from "react-redux";
import Category from "../components/Category";
import { CategoryStyleBlock } from '../styles/style'

const CategoryContainer = () => {
  const state = useSelector(state => state.category)

  return (
    <CategoryStyleBlock>
        <Category category={state} />
    </CategoryStyleBlock>
  )
}

export default CategoryContainer
