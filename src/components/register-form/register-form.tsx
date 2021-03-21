import React, { FormEvent } from 'react';
import useRegisterForm from './hooks/use-register-form';
import styles from './register-form.module.scss';
import logo from '../../img/logo.png';
import ApiService from '../../services/apiService';

const RegisterForm = () => {
  const { emailRef, pwdRef, nameRef, history } = useRegisterForm();

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
      <button className={styles.back} type={'submit'} onClick={() => history.push('/login')}>Back</button>
      <img className={styles.logo} src={logo} alt=""/>
      <h1 className={styles.title}>Sign up</h1>
      <label htmlFor="#email" className={styles.label}>Email</label>
      <input id="email" type="email" className={styles.input} placeholder="email" ref={emailRef} spellCheck={false} />
      <label htmlFor="#password" className={styles.label}>Password</label>
      <input id="password" type="password" className={styles.input} placeholder="password" ref={pwdRef}/>
      <label htmlFor="#name" className={styles.label}>Name</label>
      <input id="name" type="text" className={styles.input} placeholder="name" ref={nameRef}/>
      <button type={'submit'} className={styles.submit} onClick={register}>Sign up</button>
    </form>
  );
};

export default RegisterForm;
