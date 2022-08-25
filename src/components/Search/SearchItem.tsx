import React from "react";
import {Link} from "react-router-dom";
import {UserInSearchList} from "../../models/user";

type SearchItemProps = {
  user: UserInSearchList,
  queryString: string,
}

export const SearchItem: React.FC<SearchItemProps> = ({ user, queryString }) => {
  const { id, avatar_url, login } = user;

  return (
    <div
      key={id}
      className="flex items-center gap-4 p-4 select-none"
    >
      <div className="min-w-[64px] rounded-full overflow-hidden align-middle">
        <img className="w-[64px] h-[64px]" src={avatar_url} alt={login} />
      </div>
      <div
        className="font-bold"
        dangerouslySetInnerHTML={{
          __html: login.replace(
            new RegExp(queryString, 'gi'),
            '<mark>$&</mark>'
          )
        }}
      />
      <Link to={`/${login.toLowerCase()}/repositories`}
            className="leading-[36px] px-[20px] rounded ml-auto bg-gray-700 text-white whitespace-nowrap">
        View repos
      </Link>
    </div>
  )
}
