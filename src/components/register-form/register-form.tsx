import React, { FormEvent } from 'react';
import useRegisterForm from './hooks/use-register-form';
import styles from './register-form.module.scss';
import logo from '../../img/logo.png';
import ApiService from '../../services/apiService';

const RegisterForm = () => {
  const {
    emailRef,
    pwdRef,
    nameRef,
    history,
    errors,
    setErrors
  } = useRegisterForm();


  const getCookie = () => {
    const cookie = document.cookie;
    if(!cookie) return;
    const wantCookie = cookie.split('; ').find(row => row.startsWith('next='));
    if(!wantCookie) return;
    document.cookie= `next=/funding`;
    return wantCookie.split('=')[1];
  }

  const register = async (e: FormEvent) => {
    e.preventDefault();
    if (!await isValid()) return;
    const email = emailRef.current?.value;
    const password = pwdRef.current?.value;
    const name = nameRef.current?.value;
    if (!email || !password || !name) throw new Error('empty email or pwd or name');
    try {
      await ApiService.instance.register({ email, password, name });
      const path = getCookie();
      if(!path) return;
      history.push(path);
    } catch (e) {
      setErrors({
        email: false,
        password: false,
        name: false,
      });
    }
  }

  const isValid = async () => {
    // eslint-disable-next-line no-control-regex
    const matchEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const matchPassword = /^.{6,}$/
    const newErrors = {
      email: !emailRef.current?.value.match(matchEmail),
      password: !pwdRef.current?.value.match(matchPassword),
      name: !nameRef.current?.value
    };
    await setErrors(newErrors);
    return !newErrors.email && !newErrors.password && !newErrors.name;
  }

  return (
    <form id="register-form" className={styles.card}>
      <button className={styles.back} type={'submit'} onClick={() => history.push('/login')}>戻る</button>
      <img className={styles.logo} src={logo} alt=""/>
      <h1 className={styles.title}>Sign up</h1>
      <label htmlFor="#email" className={styles.label}>メール</label>
      <input id="email" type="email" className={styles.input} placeholder="メール" ref={emailRef} spellCheck={false} />
      <div className={`${styles.errMsg} ${errors.email ? '' : styles.invalid}`}>メールの形式が正しくありません。</div>
      <label htmlFor="#password" className={styles.label}>パスワード</label>
      <input id="password" type="password" className={styles.input} placeholder="パスワード" ref={pwdRef}/>
      <div className={`${styles.errMsg} ${errors.password ? '' : styles.invalid}`}>パスワードの形式が正しくありません。</div>
      <label htmlFor="#name" className={styles.label}>名前</label>
      <input id="name" type="text" className={styles.input} placeholder="名前" ref={nameRef}/>
      <div className={`${styles.errMsg} ${errors.name ? '' : styles.invalid}`}>名前が合いません。</div>
      <button type={'submit'} className={styles.submit} onClick={register}>登録</button>
    </form>
  );
};

export default RegisterForm;
