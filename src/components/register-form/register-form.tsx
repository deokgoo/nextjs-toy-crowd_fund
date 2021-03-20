import React, { FormEvent } from 'react';
import useRegisterForm from './hooks';
import firebaseService from '../../services/firebaseService';
import styles from './register-form.module.scss';

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
      <form className={styles.form}>
        <label htmlFor="#email" className={styles.label}>EMAIL</label>
        <input id="email" type="email" className={styles.input} ref={emailRef} spellCheck={false}/>
        <label htmlFor="#password" className={styles.label}>PASSWORD</label>
        <input id="password" type="password" className={styles.input} ref={pwdRef}/>
        <label htmlFor="#name" className={styles.label}>NAME</label>
        <input id="name" type="text" className={styles.input} ref={nameRef}/>
        <div className={styles.btnContainer}>
          <button type="submit" className={styles.btn} onClick={register}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
