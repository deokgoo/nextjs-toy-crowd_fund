import React, { FormEvent } from 'react';
import firebase from '../../firebase';
import useLogin from './hooks';

const Login = () => {
  const { emailRef, pwdRef } = useLogin();

  const login = async (e: FormEvent) => {
    e.preventDefault();
    let userCredential;
    const email = emailRef.current?.value;
    const pwd = pwdRef.current?.value;
    if (!email || !pwd) throw new Error('empty email or pwd');
    try {
      userCredential = await firebase.auth().signInWithEmailAndPassword(email, pwd);
      console.log(`UserCredential -> ${userCredential}`);
    } catch (e) {
      console.log(`error -> ${e}`);
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input type="email" ref={emailRef} spellCheck={false} autoFocus/>
        <input type="password" ref={pwdRef} />
        <button type={'submit'} onClick={login}>submit</button>
      </form>
    </div>
  );
};

export default Login;
