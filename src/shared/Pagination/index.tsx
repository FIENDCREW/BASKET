import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  limit: number;
  itemsAmount: number;
}

const Pagination: FC<IProps> = ({ limit, itemsAmount }) => {
  const pagesAmount = Math.ceil(itemsAmount / limit);
  const pageArray: number[] = [];
  const navigate = useNavigate();

  for (let i = 0; i < pagesAmount; i++) {
    pageArray.push(i);
  }

  return (
    <div>
      {pageArray.map((page) => (
        <button key={`key${page}`} type="button" onClick={() => navigate(`?page=${page}`)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
