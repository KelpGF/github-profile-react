import { GlobalStyle } from "./global/GlobalStyle";
import { UserGithubProvider } from "./provider/user-github-provider";
import App from './App';
import { HeaderApp } from "./components";

const Providers = () => {
  return (
    <>
      <GlobalStyle />

      <UserGithubProvider>
        <HeaderApp />
        <App />
      </UserGithubProvider>
    </>
  )
}

export default Providers;
