import React from 'react';
import useLogin from './hooks/use-login';
import firebaseService from '../../services/firebaseService';
import styles from './login-guard.module.scss';
import { ComponentEntry } from './type';

const LoginGuard = ({next: Component, path}: ComponentEntry) => {
  const {
    emailRef,
    pwdRef,
    authed,
  } = useLogin({Component, path});

  const login = async () => {
    const email = emailRef.current?.value;
    const pw = pwdRef.current?.value;
    if (!email || !pw) throw new Error('empty email or pwd');
    try {
      await firebaseService.instance.login({email, pw});
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
      {!!authed ? renderComponent() : renderLogin()}
    </>
  );
};

export default LoginGuard;
