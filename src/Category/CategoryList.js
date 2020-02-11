import React from "react";
import styled from "styled-components";

const CategoryItemList = [
  { id: 1, name: "한식" },
  { id: 2, name: "양식" },
  { id: 3, name: "중식" },
  { id: 4, name: "일식" },
  { id: 5, name: "분식" },
  { id: 6, name: "테마별" },
  { id: 7, name: "기타" },
  { id: 8, name: "채식" }
];

const CategoryListDesignBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 5rem 0.6rem 5rem;
  margin: 0 auto;
  border-top: 1px solid black;
  border-top-width: medium;
  border-bottom: 1px solid black;
  border-bottom-width: thin;
  background-color: #fafafa;

  @media screen and (min-width: 1024px) {
    width: 70%;
    overflow-x: auto;
  }
`;

const CategoryItemDesignBlock = styled.div`
  padding-right: 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: orange;
    font-weight: 700;
  }
`;

const CategoryList = () => {
  return (
    <CategoryListDesignBlock>
      {CategoryItemList.map(item => (
        <CategoryItemDesignBlock>
          <a onClick={{}}>{item.name}</a>
        </CategoryItemDesignBlock>
      ))}
    </CategoryListDesignBlock>
  );
};

export default CategoryList;
