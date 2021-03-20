import { useEffect, useRef, useState } from 'react';
import FirebaseService from '../../../services/firebaseService';
import firebase from 'firebase';

const useLogin = ({Component, path}: any) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const [authed, setAuthed] = useState<firebase.User|null>(null);

  const callBack = (user: firebase.User|null) => {
    if(!Component||!path) return;
    setAuthed(user);
  }

  useEffect(() => {
    if(!Component) return;
    FirebaseService.instance.statusChange(callBack);
  })

  return {
    emailRef,
    pwdRef,
    authed,
  };
};

export default useLogin;
