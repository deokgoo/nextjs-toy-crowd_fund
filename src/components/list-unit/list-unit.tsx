import React from 'react';
import style from './list-unit.module.css'

const ListUnit = () => {
  return (
    <li className={style.item}>
      <div className={style.name}>
        funding name
      </div>
      <div className={style.amount}>
        funding amount$
      </div>
    </li>
  );
};

export default ListUnit;
