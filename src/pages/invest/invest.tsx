import React, { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { deposit, getFundingInfo } from '../../services/fundingService';
import styles from './invest.module.css';

const Invest = () => {
  const [info, setInfo] = useState<any>();
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const params = useParams<{id: string}>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const data = await getFundingInfo(params.id);
    setInfo(data);
  }
  const onClick = async () => {
    try {
      await deposit({payload: {fid: params.id,money: inputRef.current?.value}});
      history.push(`/funding/${params.id}`);
    } catch(err) {
      console.log(err);
    }

  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>
    <div className={styles.invest}>
      <div className={styles.container}>
        <h1 className={styles.title}>{info?.title}</h1>
        <h2 className={styles.desc}>{info?.desc}</h2>
        <div className={styles.form}>
          <input className={styles.input} type="text" ref={inputRef}/>
          <div className={styles.unit}>円</div>
        </div>
        <button className={styles.btn} onClick={onClick}>入金</button>
      </div>
    </div>
  </>
}

export default Invest;
