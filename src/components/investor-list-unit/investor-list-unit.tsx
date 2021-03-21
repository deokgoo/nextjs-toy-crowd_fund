import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './investor-list-unit.module.scss'

const InvestorListUnit = ({name, amount, fid}: {name: string, amount: number, fid: string}) => {
  const history = useHistory();
  return (
    <div className={style.item}>
      <div className={style.name}>{name}</div>
      <div className={style.amount}>Goal: {amount}円</div>
      <button className={style.link} onClick={() => history.push(`/funding/${fid}`)}>Link</button>
    </div>
  );
};

export default InvestorListUnit;
