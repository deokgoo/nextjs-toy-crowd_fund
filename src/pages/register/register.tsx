import React, { FormEvent } from 'react';
import firebaseService from '../../services/firebaseService';
import useRegister from './hooks';

const MyComponent = () => {
  const { emailRef, pwdRef } = useRegister();

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
        <input type="email" ref={emailRef} spellCheck={false} autoFocus/>
        <input type="password" ref={pwdRef}/>
        <button type="submit" onClick={register}>Register</button>
      </form>
    </div>
  );
};

export default MyComponent;
