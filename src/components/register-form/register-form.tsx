import React, { FormEvent } from 'react';
import useRegisterForm from './hooks';
import firebaseService from '../../services/firebaseService';
import styles from './register-from.module.scss';

const RegisterForm = () => {
  const { emailRef, pwdRef, nameRef } = useRegisterForm();

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
    <div id="register-form" className={styles.container}>
      <div className={styles.title}>
        <h1>Register</h1>
      </div>
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

export default RegisterForm;
