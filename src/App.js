import React from "react";
import Title from "./components/Title";
import MenuContainer from "./containers/MenuContainer"
import CategoryContainer from "./containers/CategoryContainer";
import RandomChoiceContainer from "./containers/RandomChoiceContainer";

export default function App() {
  return (
    <React.Fragment>
       <Title />
       <CategoryContainer />
       <MenuContainer />
       <RandomChoiceContainer />
    </React.Fragment>
  )
}