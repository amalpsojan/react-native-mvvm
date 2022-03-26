import React, {memo} from 'react';
import LoginView from './View';
import useViewModel from './ViewModel';

const Login = () => {
  // const viewModel = __DEV__ ? useMockViewModel() : useViewModel();
  const viewModel = useViewModel();

  return <LoginView {...viewModel} />;
};

export default memo(Login);
