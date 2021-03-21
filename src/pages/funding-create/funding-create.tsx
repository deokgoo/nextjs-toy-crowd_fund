import styles from './funding-create.module.scss';
import { FormEvent, useRef } from 'react';
import { createCrowdFunding } from '../../services/fundingService';
import { useHistory } from 'react-router-dom';

const FundingCreate = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const targetMoneyRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if(!titleRef || !descRef || !targetMoneyRef) return;
    if(!titleRef.current?.value
      || !descRef.current?.value
      || !targetMoneyRef.current?.value) throw new Error('invalid type');
    await createCrowdFunding({
      title: titleRef.current?.value??'',
      desc: descRef.current?.value??'',
      targetMoney: parseInt(targetMoneyRef.current?.value??'0'),
    });
    history.push('/funding');
  }
  return (
    <div className={styles.fundingCreate}>
      <form className={styles.card}>
        <h2>create funding</h2>
        <label htmlFor="title" className={styles.label}>Title</label>
        <input id="title" type="text" ref={titleRef}/>
        <label htmlFor="title" className={styles.label}>Description</label>
        <input type="text" ref={descRef}/>
        <label htmlFor="title" className={styles.label}>Goal Money</label>
        <input type="text" ref={targetMoneyRef}/>
        <button type="submit" onClick={submit}>create</button>
      </form>
    </div>
  )
}

export default FundingCreate;
