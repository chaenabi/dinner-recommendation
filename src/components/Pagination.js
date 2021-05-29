import React from 'react';
import { PageUl, PageLi, PageDiv, PaginationStyle } from '../styles/style'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <PaginationStyle>
        <PageUl>
          {pageNumbers.map(number => (
            <PageLi key={number} onClick={() => { paginate(number); }}>
              <PageDiv>
                {number}
              </PageDiv>
            </PageLi>
          ))}
        </PageUl>
      </PaginationStyle>
    </div>
  );
};

export default Pagination;