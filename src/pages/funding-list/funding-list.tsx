import React from 'react';
import List from '../../components/list';
import style from './funding-list.module.css';

const FundingList = () => {
  return (
    <div id="funding-list" className={style.fundingList}>
      <List />
    </div>
  );
};

export default FundingList;
