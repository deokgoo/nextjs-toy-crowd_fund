import { useEffect, useRef, useState } from 'react';
import FirebaseService from '../../../services/firebaseService';
import firebase from 'firebase';
import { useHistory, useLocation } from 'react-router-dom';

const useLogin = ({Component, path}: any) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const location = useLocation();
  const [authed, setAuthed] = useState<firebase.User|null>(null);
  const [errors, setErrors] = useState<{email: boolean, password: boolean, authed: boolean}>({email: false, password: false, authed: false});

  const callBack = (user: firebase.User|null) => {
    if(!Component||!path) return;
    setAuthed(user);
  }

  const setCookie = (path?: string) => {
    document.cookie= `next=${path??location.pathname}`;
  }

  const getCookie = () => {
    const cookie = document.cookie;
    if(!cookie) return;
    const wantCookie = cookie.split('; ').find(row => row.startsWith('next='));
    if(!wantCookie) return;
    setCookie('/funding');
    return wantCookie.split('=')[1];
  }

  useEffect(() => {
    if(!Component) return;
    setCookie();
    FirebaseService.instance.statusChange(callBack);
  })

  return {
    emailRef,
    pwdRef,
    authed,
    history,
    errors,
    setErrors,
    getCookie,
  };
};

export default useLogin;
