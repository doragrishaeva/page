import { useState, useEffect } from 'react';

import { IAuthForm } from '../models';

export const useAuthFormConfig = (isLogin: boolean): IAuthForm => {
  const [config, setConfig] = useState<IAuthForm>({
    isEmail: false,
    isPassword: false,
    isUsername: false,
    isNewPassword: false,
    isConfirmNewPassword: false,
  });

  useEffect(() => {
    if (isLogin) {
      setConfig({
        isEmail: true,
        isPassword: true,
        isUsername: false,
        isNewPassword: false,
        isConfirmNewPassword: false,
      });
    } else {
      setConfig({
        isEmail: true,
        isPassword: false,
        isUsername: true,
        isNewPassword: true,
        isConfirmNewPassword: true,
      });
    }
  }, [isLogin]); // Only re-run the effect if isLogin changes

  return config;
};
