import { useRef } from 'react';

const useLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);

  return {
    emailRef,
    pwdRef,
  };
};

export default useLogin;
