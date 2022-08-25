import React from 'react';
import {usePagination} from "../../hooks/usePagination";
import {ReactComponent as LeftArrow} from "../../images/pagination-left-arrow.svg";
import {ReactComponent as RightArrow} from "../../images/pagination-right-arrow.svg";
import {Range} from "./Range";

type PaginationProps = {
  totalCount: number,
  pageSize: number,
  onPageChange: (id: number) => void,
  siblingCount?: number,
  currentPage: number,
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 pages we shall not render the component
  if (paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div className="flex gap-[5px] justify-between max-w-[320px] mx-auto select-none">
      <div
        className="w-[30px] flex items-center justify-center cursor-pointer"
        onClick={onPrevious}
      >
        <LeftArrow width={20} height={20} />
      </div>

      <Range
        paginationRange={paginationRange}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      <div
        className="w-[30px] flex items-center justify-center cursor-pointer"
        onClick={onNext}
      >
        <RightArrow width={20} height={20} />
      </div>
    </div>
  )
}
