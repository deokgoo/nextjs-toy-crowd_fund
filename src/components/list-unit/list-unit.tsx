import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './list-unit.module.css'

const ListUnit = ({name, amount, fid}: {name: string, amount: number, fid: string}) => {
  const history = useHistory();
  return (
    <li className={style.item}>
      <div className={style.name}>
        {name}
      </div>
      <div className={style.amount}>
        funding amount: {amount}円
      </div>
      <button onClick={() => history.push(`/funding/${fid}`)}>link</button>
    </li>
  );
};

export default ListUnit;
