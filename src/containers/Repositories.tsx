import React from 'react';
import {useParams} from "react-router-dom";
import {copyToClipboard} from "../utils/clipboard";
import {useRepos} from "../hooks/useRepos";
import {Carousel} from "../components/Carousel";
import {Repo} from "../components/Repo";
import {Preloader} from "../components/Preloader";
import {Error} from "../components/Error";


export const RepositoriesContainer = () => {
  const {userLogin = ''} = useParams();
  const {isLoading, isError, data = []} = useRepos(userLogin);

  const handleRepoClone = async (url: string) => {
    await copyToClipboard(`git clone ${url}`);
    alert("Copied to clipboard");
  }

  return (
    <div>
      {isLoading && <Preloader/>}
      {isError && <Error/>}
      <Carousel>
        {
          data.map((repo) => (
            <Carousel.Item key={repo.id}>
              <Repo {...repo} onCopy={handleRepoClone} />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  );
}
