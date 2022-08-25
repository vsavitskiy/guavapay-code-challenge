import {useQuery} from "@tanstack/react-query";
import {GithubService} from "../services/github";

export const useRepos = (userId: string) => {
  return useQuery(
    ['repos', userId],
    () => GithubService.getUserRepos(userId),
  )
}
