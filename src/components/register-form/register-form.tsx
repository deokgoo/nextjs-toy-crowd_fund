import React, { FormEvent } from 'react';
import useRegisterForm from './hooks';
import firebaseService from '../../services/firebaseService';
import styles from './register-form.module.scss';
import logo from '../../img/logo.png';

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
    <form id="register-form" className={styles.card}>
      <img className={styles.logo} src={logo} alt=""/>
      <h1 className={styles.title}>Register</h1>
      <label htmlFor="#email" className={styles.label}>EMAIL</label>
      <input id="email" type="email" className={styles.input} placeholder="email" ref={emailRef} spellCheck={false} />
      <label htmlFor="#password" className={styles.label}>PASSWORD</label>
      <input id="password" type="password" className={styles.input} placeholder="password" ref={pwdRef}/>
      <label htmlFor="#name" className={styles.label}>NAME</label>
      <input id="name" type="text" className={styles.input} placeholder="name" ref={nameRef}/>
      <button type={'submit'} className={styles.submit} onClick={register}>Register</button>
    </form>
  );
};

export default RegisterForm;
