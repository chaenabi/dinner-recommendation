import React, { useState } from "react";
import TopMenu from "./TopBar/TopMenu";
import Title from "./TopBar/Title";
import CategoryList from "./Category/CategoryList";
function App() {
  return (
    <>
      <TopMenu /> <Title /> <CategoryList />
    </>
  );
}

export default App;
