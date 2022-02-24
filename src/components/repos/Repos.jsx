import { CardGroupRepo, CardRepo } from "../../layout/layoutsDefault";

const divRepo = (repo) => (
  <CardRepo key={repo.id}>
    <a href={repo.git_url}>{repo.name}</a>
  </CardRepo>
)

export const Repos = ({ repos, starred }) => (
  <>
    {repos.length > 0 && 
      <CardGroupRepo>
        <h1>Repositórios</h1>
        {repos.map(divRepo)}
      </CardGroupRepo>
    }
    {starred.length > 0 && 
      <CardGroupRepo>
        <h1>Estrelados</h1>
        {starred.map(divRepo)}
      </CardGroupRepo>
    }
  </>
)
