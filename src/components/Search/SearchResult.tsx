import React from "react";
import {UserInSearchList} from "../../models/user";
import {Preloader} from "../Preloader";
import {Error} from "../Error";
import {SearchItem} from "./SearchItem";

type SearchResultProps = {
  queryString: string,
  loading: Boolean,
  error: Boolean,
  data?: UserInSearchList[],
}

export const SearchResult: React.FC<SearchResultProps> = (props) => {
  const { loading, error, data = [], queryString } = props;

  return (
    <div className="top-42 overflow-y-scroll">
      { loading && <Preloader />}
      { error && <Error />}
      { data.map((user: UserInSearchList) => (
          <SearchItem user={user} queryString={queryString} />
      ))}
    </div>
  )
}
