import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

const useRegisterForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const [errors, setErrors] = useState<{ email: boolean, password: boolean, name: boolean }>(
    { email: false, password: false, name: false }
    );

  return {
    emailRef,
    pwdRef,
    nameRef,
    history,
    errors,
    setErrors,
  };
}

export default useRegisterForm;
