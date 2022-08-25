import React from 'react';
import {Layout} from "../components/Layout";
import {SearchContainer} from "../containers/Search";

export const HomePage = () => {
  return (
    <Layout>
      <div className="p-4 mx-auto">
        <h2 className="my-4 font-bold">Search</h2>
        <SearchContainer />
      </div>
    </Layout>
  );
}
