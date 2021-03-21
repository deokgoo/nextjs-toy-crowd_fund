import React, { FormEvent } from 'react';
import useLogin from './hooks/use-login';
import firebaseService from '../../services/firebaseService';
import styles from './login-guard.module.scss';
import { ComponentEntry } from './type';
import logo from '../../img/logo.png';

const LoginGuard = ({next: Component, path}: ComponentEntry) => {
  const {
    authed,
    emailRef,
    pwdRef,
    history,
    errors,
    setErrors,
  } = useLogin({Component, path});

  const login = async (e: FormEvent) => {
    e.preventDefault();
    if(!await isValid()) return;
    const email = emailRef.current?.value;
    const pw = pwdRef.current?.value;
    if (!email || !pw) throw new Error('empty email or pwd');
    try {
      await firebaseService.instance.login({email, pw});
    } catch (e) {
      setErrors({
        email: false,
        password: false,
        authed: true,
      });
    }
  };

  const renderComponent = () => {
    if(!Component) {
      return renderLogin();
    } else {
      return <Component />;
    }
  }

  const isValid = async () => {
    // eslint-disable-next-line no-control-regex
    const matchEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const newErrors = {
      email: !emailRef.current?.value.match(matchEmail),
      password: !pwdRef.current?.value,
      authed: errors.authed,
    };
    if(!pwdRef || !emailRef) return;
    await setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  }

  const renderLogin = () => {
    return (
      <div id="login">
        <div className={styles.container}>
          <form className={styles.card}>
            <img className={styles.logo} src={logo} alt=""/>
            <h1 className={styles.title}>Fund together</h1>
            <label className={styles.label} htmlFor="login_email">メール</label>
            <input id="login_email" className={styles.input} type="email" ref={emailRef} placeholder="email" spellCheck={false} autoComplete={'off'}/>
            <div className={`${styles.errMsg} ${errors.email ? styles.invalid : ''}`}>メールが合わないタイプです。</div>
            <label className={styles.label} htmlFor="login_pw">パスワード</label>
            <input id="login_pw" className={styles.input} type="password" ref={pwdRef} placeholder="password"/>
            <div className={`${styles.errMsg} ${errors.password ? styles.invalid : ''}`}>パスワードを入力してください。</div>
            <div className={`${styles.unAuthed} ${errors.authed ? styles.invalid : ''}`}>メールアドレスまたはパスワードを確認してください。</div>
            <button className={styles.submit} type={'submit'} onClick={login}>ログイン</button>
            <div className={styles.line}/>
            <button className={styles.register} type={'submit'} onClick={() => history.push('/register')}>新規登録</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      {!!authed ? renderComponent() : renderLogin()}
    </>
  );
};

export default LoginGuard;
