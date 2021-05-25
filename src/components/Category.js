import React from "react";
import { Route } from 'react-router-dom'
import { CategoryStyle } from '../styles/style'

const Category = ({ category }) => {
  return (
      category.map(item => (
        <CategoryStyle>
          <Route path="/" render={() => <p onClick={{}}>{item.name}</p>}></Route>
        </CategoryStyle>
      ))
  );
};

export default Category