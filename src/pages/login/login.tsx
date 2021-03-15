import React, { FormEvent, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import firebaseService from '../../services/firebaseService';
import useLogin from './hooks';
import styles from './login.module.css';
import FirebaseService from '../../services/firebaseService';

const Login = ({next: Component, path}: {next?: React.FunctionComponent, path?: string}) => {
  const { emailRef, pwdRef } = useLogin();
  const [authed, setAuthed] = useState<firebase.User|null>(null);
  const callBack = (user: firebase.User|null) => {
    if(!Component||!path) return;
    setAuthed(user);
  }

  useEffect(() => {
    if(!Component) return;
    FirebaseService.instance.statusChange(callBack);
  })

  const login = async (e: FormEvent) => {
    e.preventDefault();
    let userCredential;
    const email = emailRef.current?.value;
    const pw = pwdRef.current?.value;
    if (!email || !pw) throw new Error('empty email or pwd');
    try {
      userCredential = await firebaseService.instance.login({email, pw});
      console.log(await userCredential?.getIdToken());
      console.log(userCredential);
    } catch (e) {
      console.log(e);
    }
  };

  const renderComponent = () => {
    if(!Component) {
      return renderLogin();
    } else {
      return <Component />;
    }
  }

  const renderLogin = () => {
    return (
      <div id="login">
        <div className={styles.container}>
          <form className={styles.card}>
            <h1 className={styles.title}>Fund together</h1>
            <label className={styles.label} htmlFor="login_email">email</label>
            <input id="login_email" className={styles.input} type="email" ref={emailRef} placeholder="email" spellCheck={false} autoFocus/>
            <label className={styles.label} htmlFor="login_pw">pw</label>
            <input id="login_pw" className={styles.input} type="password" ref={pwdRef} placeholder="password"  />
            <button className={styles.submit} type={'submit'} onClick={login}>L o g i n</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      {
        !!authed ? renderComponent() : renderLogin()
      }
    </>
  );
};

export default Login;
