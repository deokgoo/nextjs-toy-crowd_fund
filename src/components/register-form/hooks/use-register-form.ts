import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const useRegisterForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  return {
    emailRef,
    pwdRef,
    nameRef,
    history,
  };
}

export default useRegisterForm;
