import React, { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { deposit, getFundingInfo } from '../../services/fundingService';
import styles from './invest.module.scss';

const Invest = () => {
  const [info, setInfo] = useState<any>();
  const inputRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);
  const history = useHistory();
  const params = useParams<{id: string}>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const data = await getFundingInfo(params.id);
    setInfo(data);
  }
  const onClick = async () => {
    try {
      await deposit({payload: { fid: params.id, money: inputRef.current?.value, msg: msgRef.current?.value }});
      history.push(`/funding/${params.id}`);
    } catch(err) {
      console.log(err);
    }
  }
  const addMoney = async (money: number) => {
    if (!inputRef.current) return;
    const sum = inputRef.current.value.match(/\d+/) ? parseInt(inputRef.current.value) + money : money;
    inputRef.current.value = String(sum);
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.invest}>
      <div className={styles.container}>
        <h1 className={styles.title}>{info?.title}</h1>
        <h2 className={styles.desc}>{info?.desc}</h2>
        <div className={styles.form}>
          <input className={styles.input} type="number" min="0" ref={inputRef}/>
          <div className={styles.unit}>円</div>
        </div>
        <div className={styles.amountContainer}>
          <button className={styles.amount} onClick={() => addMoney(1000)}>+ 1,000</button>
          <button className={styles.amount} onClick={() => addMoney(5000)}>+ 5,000</button>
          <button className={styles.amount} onClick={() => addMoney(10000)}>+ 10,000</button>
          <button className={styles.amount} onClick={() => addMoney(20000)}>+ 20,000</button>
        </div>
        <div className={styles.msgContainer}>
          <h3 className={styles.msgTitle}>Message</h3>
          <textarea name="msg" id="msg" className={styles.msg} />
        </div>
        <button className={styles.btn} onClick={onClick}>入金</button>
      </div>
    </div>
  );
}

export default Invest;
