import { createContext, useContext, useState } from "react";

export const UserGithubContext = createContext({});

export const UserGithubProvider = ({children}) => {
  const [ userData, setUserData ] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: []
  })

  const setUser = (hasUser, user) => {
    setUserData((prevState) => (
      {
        ...prevState,
        hasUser,
        loading: false,
        user: {
          id: (user) ? user.id : undefined,
          avatar: (user) ? user.avatar : undefined,
          login: (user) ? user.login : undefined,
          name: (user) ? user.name : undefined,
          html_url: (user) ? user.html_url : undefined,
          blog: (user) ? user.blog : undefined,
          company: (user) ? user.company : undefined,
          location: (user) ? user.location : undefined,
          followers: (user) ? user.followers : undefined,
          following: (user) ? user.following : undefined,
          public_gists: (user) ? user.public_gists : undefined,
          public_repos: (user) ? user.public_repos : undefined,
        }
      }
    ))

    setRepos([]);
    setStarred([]);
  }

  const setRepos = (repos) => {
    setUserData((prevState) => (
      { ...prevState, repositories: repos }
    ))
  }

  const setStarred = (starred) => {
    setUserData((prevState) => (
      { ...prevState, starred }
    ))
  }

  return (
    <UserGithubContext.Provider value={{ userData, setUser, setRepos, setStarred }}>
      { children }
    </UserGithubContext.Provider>
  )
}

export const useUserGithubProvider = () => useContext(UserGithubContext);
