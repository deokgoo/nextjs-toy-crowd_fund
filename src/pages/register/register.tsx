import React from 'react';
import styles from './register.module.scss';
import RegisterForm from '../../components/register-form';

const Register = () => {
  return (
    <div id="register-container" className={styles.container}>
      <RegisterForm />
    </div>
  );
};

export default Register;
