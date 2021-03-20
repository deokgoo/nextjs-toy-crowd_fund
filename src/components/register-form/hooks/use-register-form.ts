import { useRef } from 'react';

const useRegisterForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  return {
    emailRef,
    pwdRef,
    nameRef,
  };
}

export default useRegisterForm;
