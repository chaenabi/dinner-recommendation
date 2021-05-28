import styled from "styled-components"

export const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  padding: 1rem;
`

export const CategoryStyleBlock = styled.div`
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
`

export const CategoryStyle = styled.div`
  padding-right: 1rem;
  font-size: 1rem;
  cursor: pointer;
  
  & > p {
    margin: 0
  }

  &:hover, &:active {
    font-weight: 700;
  }
  color: ${props => props.selected ? 'orange' : 'black'};
  font-weight: ${props => props.selected ? '700' : 'normal'};
`

export const MenuStyleBlock = styled.div`
  display: flex;
  justify-content: center;
`

export const RandomChoiceStyleBlock = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`