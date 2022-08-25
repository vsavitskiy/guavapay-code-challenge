import axios from "axios";
import {User, ServerResponse, UserInSearchList} from "../models/user";
import {Repo} from "../models/repo";

const BASE_URL = 'https://api.github.com';

axios.defaults.baseURL = BASE_URL;

export const GithubService = {
  getUsersList: async (userName = '', page: number, pageSize: number): Promise<ServerResponse<UserInSearchList>> => {
    const queryString = `${encodeURIComponent(userName)} in:login type:user`;

    const response = await axios.get(`/search/users`, {
      params: {
        q: queryString,
        per_page: pageSize,
        page,
      }
    })

    return response.data;
  },

  getUser: async (login: string): Promise<User> => {
    const response = await axios.get(`/users/${login}`, {
      headers: {
        'Accept': 'application/vnd.github+json',
      }
    });

    return response.data;
  },

  getUserRepos: async (login: string): Promise<Repo[]> => {
    const response = await axios.get(`/users/${login}/repos`, {
      headers: {
        'Accept': 'application/vnd.github+json',
      }
    });

    return response.data;
  }
}

