import React from 'react';
import {DOTS} from "../../hooks/usePagination";

type PaginationProps = {
  onPageChange: (id: number) => void,
  currentPage: number,
  paginationRange: number[],
}

export const Range: React.FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    paginationRange,
    currentPage,
  } = props;

  return (
    <>
      {paginationRange?.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <div className="w-[30px] leading-[30px] text-center">
            &#8230;
          </div>;
        }

        return (
          <div
            className="w-[30px] leading-[30px] text-center rounded-full cursor-pointer hover:bg-gray-300"
            style={{
              background: pageNumber === currentPage ? 'gray' : '',
              color: pageNumber === currentPage ? "white" : '',
            }}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </div>
        );
      })}
    </>
  )
}
