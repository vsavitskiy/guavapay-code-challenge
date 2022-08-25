import {useQuery} from "@tanstack/react-query";
import {GithubService} from "../services/github";

export const useUser = (userLogin: string) => {
  return useQuery(
    ['user', userLogin],
    () => GithubService.getUser(userLogin),
  )
}
