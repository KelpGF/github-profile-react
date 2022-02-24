import api from './api'

export const getUser = (nickname) => (
  api.get(`users/${nickname}`).then(({ data }) => data)
);

export const getUserRepos = (nickname) => (
  api.get(`users/${nickname}/repos`).then(({ data }) => data)
);

export const getUserStarred = (nickname) => (
  api.get(`users/${nickname}/starred`).then(({ data }) => data)
);
