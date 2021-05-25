import React from "react";
import { FaCoins } from "react-icons/fa";
import { TitleStyle } from "../styles/style";

const Title = () => {
  const title = `저녁 메뉴 추천받기`
  return (
    <TitleStyle>
      <FaCoins />
      {title}
    </TitleStyle>
  )
}

export default Title;
