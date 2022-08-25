import React from 'react';
import {useParams} from "react-router-dom";
import {capitalizeString} from "../utils/string";
import {Layout} from "../components/Layout";
import {UserInfoContainer} from "../containers/UserInfo";
import {RepositoriesContainer} from "../containers/Repositories";

export const RepositoriesPage = () => {
  const {userLogin = ''} = useParams();
  const capitalizedLogin = capitalizeString(userLogin);

  return (
    <Layout showHeader pageHeader={`${capitalizedLogin} Repositories`}>
      <UserInfoContainer />
      <RepositoriesContainer />
    </Layout>
  );
}
