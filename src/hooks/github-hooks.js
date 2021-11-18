import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStarred, getUserSubs } = useContext(
    GithubContext
  );

  return { githubState, getUser, getUserRepos, getUserStarred, getUserSubs };
};

export default useGithub;
