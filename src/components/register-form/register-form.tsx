import React, { FormEvent } from 'react';
import useRegisterForm from './hooks/use-register-form';
import styles from './register-form.module.scss';
import logo from '../../img/logo.png';
import ApiService from '../../services/apiService';

const RegisterForm = () => {
  const { emailRef, pwdRef, nameRef } = useRegisterForm();

  const register = async (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = pwdRef.current?.value;
    const name = nameRef.current?.value;
    if (!email || !password || !name) throw new Error('empty email or pwd or name');
    try {
      await ApiService.instance.register({ email, password, name });
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
