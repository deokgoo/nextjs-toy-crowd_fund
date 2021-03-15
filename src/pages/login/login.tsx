import React, { FormEvent } from 'react';
import firebase from '../../services/firebaseService';
import useLogin from './hooks';
import styles from './login.module.css';

const Login = () => {
  const { emailRef, pwdRef } = useLogin();

  const login = async (e: FormEvent) => {
    e.preventDefault();
    let userCredential;
    const email = emailRef.current?.value;
    const pw = pwdRef.current?.value;
    if (!email || !pw) throw new Error('empty email or pwd');
    try {
      userCredential = await firebase.instance.login({email, pw});
      console.log(await userCredential?.getIdToken());
      console.log(userCredential);
    } catch (e) {
      console.log(e);
    }
  };

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
};

export default Login;
