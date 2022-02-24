// import { useEffect } from "react";
import { useUserGithubProvider } from "./provider/user-github-provider";

import { ButtonStyled, Card, Main } from "./layout/layoutsDefault";
import { getUserRepos, getUserStarred } from "./services/requests";
import { Repos } from "./components/repos/Repos";

function App() {
  const { userData, setRepos, setStarred  } = useUserGithubProvider();

  const handleRepos = async () => {
    try {
      const repos = await getUserRepos(userData.user.login);

      setRepos(repos);
    } catch (err) {
      setRepos([]);
    }
  }
console.log(userData);
  const handleStarred = async () => {
    try {
      const repos = await getUserStarred(userData.user.login);

      setStarred(repos);
    } catch (err) {
      setStarred([]);
    }
  }

  return (
    <Main>
      {
        userData.hasUser ?
        <>
          <Card>
            <h3>
              <a href={userData.user.html_url} target="_blank" rel="noreferrer">
                {userData.user.name}
              </a>
            </h3>
            {userData.user.company && <h4>
              Company: {userData.user.company}
            </h4>}
            {userData.user.location && <h4>
              Locale: {userData.user.location}
            </h4>}
            <ButtonStyled onClick={handleRepos}>
              Repositórios
            </ButtonStyled>
            <ButtonStyled onClick={handleStarred}>
              Estrelados
            </ButtonStyled>
          </Card>
          <Repos repos={userData.repositories} starred={userData.starred} />
        </>
        :
        <h2>Sem dados</h2>
      }
    </Main>
  );
}

export default App;
