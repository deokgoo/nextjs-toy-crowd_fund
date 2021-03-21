import styles from './funding-create.module.scss';
import { FormEvent, useRef } from 'react';
import { createCrowdFunding } from '../../services/fundingService';

const FundingCreate = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const targetMoneyRef = useRef<HTMLInputElement>(null);
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
    })
  }
  return (
    <div className={styles.fundingCreate}>
      <form>
        <input type="text" ref={titleRef}/>
        <input type="text" ref={descRef}/>
        <input type="text" ref={targetMoneyRef}/>
        <button type="submit" onClick={submit}>create</button>
      </form>
    </div>
  )
}

export default FundingCreate;
