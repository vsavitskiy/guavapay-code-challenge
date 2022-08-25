import React from 'react';
import {useParams} from "react-router-dom";
import {useUser} from "../hooks/useUser";
import {Preloader} from "../components/Preloader";
import {Error} from "../components/Error";

export const UserInfoContainer = () => {
  const {userLogin = ''} = useParams();
  const {isLoading, isError, data} = useUser(userLogin);

  return (
    <div>
      {isLoading && <Preloader/>}
      {isError && <Error/>}
      {data && (
        <div>
          <div className="my-[30px] p-4 mx-auto">
            <div>Repositories: {data.public_repos}</div>
            <div>Followers: {data.followers}</div>
            <div>Following: {data.following}</div>
          </div>
        </div>
      )}
    </div>
  );
}
