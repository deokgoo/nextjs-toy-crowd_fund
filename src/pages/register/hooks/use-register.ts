import { useRef } from 'react';

const useRegister = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  return {
    emailRef,
    pwdRef,
    nameRef,
  };
}

export default useRegister;
