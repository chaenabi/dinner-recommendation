import React from "react";
import Category from "../components/Category";
import { CategoryStyleBlock } from '../styles/style'

const initialCatory = [
  { id: 1, name: "한식" },
  { id: 2, name: "양식" },
  { id: 3, name: "중식" },
  { id: 4, name: "일식" },
  { id: 5, name: "분식" },
  { id: 6, name: "테마별" },
  { id: 7, name: "기타" },
  { id: 8, name: "채식" }
]

const CategoryContainer = () => {
  return (
    <CategoryStyleBlock>
        <Category category={initialCatory} />
    </CategoryStyleBlock>
  )
}

export default CategoryContainer
