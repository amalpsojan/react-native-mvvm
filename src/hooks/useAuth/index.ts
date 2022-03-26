import {User as _User, UserToken} from '@appTypes/models';
import {useSelector} from 'react-redux';
import {AccountSelector} from '@appState/selectors';

type User =
  | (_User & {
      token: UserToken;
    })
  | null;

type LoginArgs = {username: string; password: string};

const useAuth = () => {
  const user: User = useSelector(AccountSelector.selectAuthUser);

  const login = ({username, password}: LoginArgs): void => {
    if (username === 'test@test.com' && password === '12345678') {
      
    }
  };

  const register = () => {};

  const logout = (): void => {};

  return {
    user: (user?.id
      ? {
          id: user.id,
          name: user.name,
          username: user.username,
          token: user.token,
        }
      : null) as User,
    login,
    register,
    logout,
  };
};

export default useAuth;
