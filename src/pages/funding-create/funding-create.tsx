import styles from './funding-create.module.scss';
import { FormEvent, useRef, useState } from 'react';
import { createCrowdFunding } from '../../services/fundingService';
import { useHistory } from 'react-router-dom';

const FundingCreate = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const targetMoneyRef = useRef<HTMLInputElement>(null);
  const [goalMoneyTrigger, setGoalMoneyTrigger] = useState<boolean>(false);
  const [periodTrigger, setPeriodTrigger] = useState<boolean>(false);

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
  const onClickTriggerMoney = () => {
    setGoalMoneyTrigger(x => !x);
  }
  const onClickPeriod = () => {
    setPeriodTrigger(x => !x)
  }

  return (
    <div className={styles.fundingCreate}>
      <form className={styles.card}>
        <h2>create funding</h2>
        <div>
          <label htmlFor="title" className={styles.label}>Title</label>
          <input id="title" type="text" ref={titleRef}/>
          <label htmlFor="desc" className={styles.label}>Description</label>
          <input id="desc" type="text" ref={descRef}/>
          <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
            <input id="goal-check" type="checkbox" style={{width: 'auto', marginBottom: '0'}} onClick={onClickTriggerMoney}/>
            <label htmlFor="goal-check" className={styles.label} style={{width: 'auto'}}>目標金額設定</label>
          </div>
          <div style={{display: 'flex', width: '100%', alignItems: 'center', marginBottom: '1rem'}}>
            <input id="period-check" type="checkbox" style={{width: 'auto', marginBottom: '0'}} onClick={onClickPeriod}/>
            <label htmlFor="period-check" className={styles.label} style={{width: 'auto'}}>期間設定</label>
          </div>
        </div>
        {
          goalMoneyTrigger ?
            <>
              <label htmlFor="goal" className={styles.label}>目標金額</label>
              <input id="goal" type="text" ref={targetMoneyRef}/>
            </> :
            <></>
        }
        {
          periodTrigger ?
            <>
              <label htmlFor="period" className={styles.label}>期間</label>
              <input id="period" type="text" ref={targetMoneyRef}/>
            </> :
            <></>
        }
        <button type="submit" onClick={submit}>create</button>
      </form>
    </div>
  )
}

export default FundingCreate;
