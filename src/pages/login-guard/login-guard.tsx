import React, { FormEvent } from 'react';
import useLogin from './hooks/use-login';
import firebaseService from '../../services/firebaseService';
import styles from './login-guard.module.scss';
import { ComponentEntry } from './type';
import logo from '../../img/logo.png';

const LoginGuard = ({next: Component, path}: ComponentEntry) => {
  const {
    authed,
    emailRef,
    pwdRef,
    history,
  } = useLogin({Component, path});

  const login = async (e: FormEvent) => {
    e.preventDefault();
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
            <img className={styles.logo} src={logo} alt=""/>
            <h1 className={styles.title}>Fund together</h1>
            <label className={styles.label} htmlFor="login_email">Email</label>
            <input id="login_email" className={styles.input} type="email" ref={emailRef} placeholder="email" spellCheck={false}/>
            <label className={styles.label} htmlFor="login_pw">Password</label>
            <input id="login_pw" className={styles.input} type="password" ref={pwdRef} placeholder="password"  />
            <button className={styles.submit} type={'submit'} onClick={login}>L o g i n</button>
            <div className={styles.line}/>
            <button className={styles.register} type={'submit'} onClick={() => history.push('/register')}>R e g i s t e r</button>
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
