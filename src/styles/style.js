import styled from "styled-components"

export const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 361px) {
    font-size: 24px;
    width: 100%;
    margin: 0 auto;
    padding-left: 0px;
  }
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
  border: border-box;
  
  & + & {
    margin-left: 1rem;
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
    overflow-x: auto;
  }
  
  @media (max-width: 400px) {
    width: 100%;
    margin: 0 auto;
    padding: 0.6rem 0 0.6rem 0;
  }

  @media (max-width: 427px) {
    width: 100%;
    margin: 0 auto;
    padding: 0.5rem 0 0.5rem 0;
  }
`

export const CategoryStyle = styled.div`
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

export const MenuStyleGrid = styled.div`
  margin: 20px 0 0 0;
  padding: 0;
  display: grid;
  border: border-box;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  justify-items: center;
`

export const MenuStyleBlock = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const ImageStyle = styled.img`
  border-radius: 10%;
  width: 150px;
  height: 150px;
  object-fit: cover;

  @media (max-width: 954px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 514px) {
    width: 60px;
    height: 60px;
  }
`

export const RandomChoiceStyleBlock = styled.div`
  margin-top: 40px;
  margin-left: 30%;
`

export const RandomlyChosen = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
    justify-content: space-around;

    & > p {
      @media (max-width: 427px) {
        padding-top: 6px;
      }
      @media (min-width: 1024px) {
        padding-top: 30px;
      }
    }
`

export const PaginationStyle = styled.div`
  margin-left: 10%;
`

export const PageUl = styled.ul`
  margin: 0;
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  background-color: rgba(0, 0, 0, 0.4);
`

export const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover, &:active {
    cursor: pointer;
    color: white;
    background-color: orange;
  }
  &:focus::after {
    color: white;
    background-color: orange;
  }
`

export const PageDiv = styled.div`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: orange;
  }
`