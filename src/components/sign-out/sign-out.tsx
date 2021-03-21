import React, { useEffect, useState } from 'react';
import FirebaseService from '../../services/firebaseService';
import firebase from 'firebase';
import styles from './sign-out.module.scss';
import { useHistory } from 'react-router-dom';

const SignOut = () => {
  const [authed, setAuthed] = useState<firebase.User|null>(null);
  const history = useHistory();

  useEffect(() => {
    FirebaseService.instance.statusChange((user: firebase.User|null) => {
      setAuthed(user);
    });
  })

  const signOut = async () => {
    await FirebaseService.instance.logout();
    history.push('/login');
  }

  return (
    <div className={`${!authed ? styles.invalid : ''}`}>
      <button className={styles.signOutBtn} onClick={signOut}>Sign out</button>
    </div>
  );
};

export default SignOut;
