import React from "react";
import TopMenu from "./TopBar/TopMenu";
import Title from "./TopBar/Title";
import CategoryList from "./Category/CategoryList";

export default function App() {
  return (
    <React.Fragment>
      <TopMenu /> <Title /> <CategoryList />
    </React.Fragment>
  );
}