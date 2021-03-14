import React, { FormEvent } from 'react';
import firebase from '../../services/firebaseService';
import useLogin from './hooks';

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
