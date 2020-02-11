import React from "react";
import { FaCoins } from "react-icons/fa";
import styled from "styled-components";

const TitleDesignBlock = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  padding: 0.6rem;
`;

const Title = () => {
  return (
    <TitleDesignBlock>
      <FaCoins />
      그래서 뭐먹어?
    </TitleDesignBlock>
  );
};

export default Title;
