import { useState } from 'react';
import { Button, InputText } from '..';
import { HeaderStyled } from '../../layout/layoutsDefault';
import { getUser } from '../../services/requests'
import { useUserGithubProvider } from '../../provider/user-github-provider';

export const HeaderApp = () => {
  const { setUser } = useUserGithubProvider();
  const [ nickname, setNickname ] = useState('kelpgf');

  const handleUserGithub = async (nickname) => {
    try {
      const user = await getUser(nickname);
  
      setUser(typeof user !== 'undefined', user);
    } catch (err) {
      setUser(false);
    }
  }

  const handleNickname = (e) => {
    setNickname(e.target.value);
  }

  return (
    <HeaderStyled>
      <InputText
        value={nickname}
        onChange={(e) => handleNickname(e)}
        placeHolder='Informe o nickname'
      />
      <Button onClick={() => handleUserGithub(nickname)}>Procurar</Button>
    </HeaderStyled>
  );
};
