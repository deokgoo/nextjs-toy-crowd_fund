import React, { FormEvent } from 'react';
import firebaseService from '../../services/firebaseService';
import useRegister from './hooks';
import styles from './register.module.scss';

const Register = () => {
  const { emailRef, pwdRef, nameRef } = useRegister();

  const register = async (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const pw = pwdRef.current?.value;
    if (!email || !pw) throw new Error('empty email or pwd');
    try {
      const userCredential = await firebaseService.instance.register({email, pw});
      console.log(userCredential);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div id="register-container">
      <h1>Register</h1>
      <form>
        <label htmlFor="#email">EMAIL</label>
        <input id="email" type="email" ref={emailRef} spellCheck={false} autoFocus/>
        <label htmlFor="#password">PASSWORD</label>
        <input id="password" type="password" ref={pwdRef}/>
        <label htmlFor="#name">NAME</label>
        <input id="name" type="text" ref={nameRef}/>
        <button type="submit" onClick={register}>Register</button>
      </form>
    </div>
  );
};

export default Register;
