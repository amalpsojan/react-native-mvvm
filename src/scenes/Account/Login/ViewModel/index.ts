import {useAuth} from '@appHooks';

const LoginViewModel = () => {
  const {login} = useAuth();

  return {login};
};

export default LoginViewModel;
