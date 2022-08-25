import React, {ChangeEvent, useContext, useState} from 'react';
import {useDebounce} from "../hooks/useDebounce";
import {useUsersList} from "../hooks/useUsersList";
import {QueryString} from "../context/queryString";
import {SearchResult} from "../components/Search";
import {Pagination} from "../components/Pagination";

const PAGE_SIZE = 5;

export const SearchContainer = () => {
  const queryStringContext = useContext(QueryString);
  const [queryString, setQueryString] = useState(queryStringContext.queryString);
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedUserName = useDebounce(queryString);
  const {isError, data, isFetching, isLoading} = useUsersList(debouncedUserName, currentPage, PAGE_SIZE);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryString(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        className="border py-2 px-4 w-full h-[42px] mb-2"
        placeholder="Search for github username"
        onChange={handleChange}
        value={queryString}
      />

      <SearchResult
        loading={isLoading && isFetching}
        error={isError}
        data={data?.items}
        queryString={debouncedUserName}
      />

      <Pagination
        currentPage={currentPage}
        totalCount={data?.total_count || 0}
        pageSize={PAGE_SIZE}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  )
}
