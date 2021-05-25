import React from "react";
import Title from "./components/Title";
import MenuContainer from "./containers/MenuContainer"
import CategoryContainer from "./containers/CategoryContainer";

export default function App() {
  return (
    <React.Fragment>
       <Title />
       <CategoryContainer />
       <MenuContainer />
    </React.Fragment>
  )
}