import { useRef } from 'react';

const useRegister = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);

  return {
    emailRef,
    pwdRef,
  };
}

export default useRegister;
