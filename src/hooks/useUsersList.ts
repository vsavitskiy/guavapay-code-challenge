import {useContext, useEffect} from "react";
import {useQuery} from "@tanstack/react-query";
import {GithubService} from "../services/github";
import {QueryString} from "../context/queryString";

export const useUsersList = (queryString: string, page: number, pageSize: number) => {
  const queryStringContext = useContext(QueryString);
  const query = useQuery(
    ['users', queryString, page],
    () => GithubService.getUsersList(queryString, page, pageSize),
    {
      enabled: queryString.length > 0,
      select: (data) => ({
        ...data,
        // GitHub api provides only first 1000 search results
        total_count: Math.min(data.total_count, 1000),
      })
    }
  );

  useEffect(() => {
    queryStringContext.setQueryString(queryString);
  }, [queryString, queryStringContext]);

  return query
}
