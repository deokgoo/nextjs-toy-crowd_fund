import React, { useEffect, useState } from 'react';
import style from './funding.module.css';
import ApiService from '../../services/apiService';

export type AmountType = {
  created_at: Date,
  money: number,
  userId: string
}

const Funding = ({fid}: {fid: string}) => {
  const [investorList, setInvestorList] = useState<AmountType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const list = await ApiService.instance.getInvestorListByFid(fid);
      setInvestorList(list);
    }
    fetchData();
  }, [fid])

  const render = () => {
    if(!investorList) return;
    return (
      <ul>
        {investorList.map((x, idx) => <li className={style.investor} key={idx}>{JSON.stringify(investorList)}</li>)};
      </ul>
    );
  }

  return (
    <div id="funding" className={style.funding}>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Title</h1>
        </div>
        <div className={style.amount}>
          <h2>{investorList?.reduce<number>((accumulator, currentValue, currentIndex) => accumulator + currentValue.money, 0)}</h2>
        </div>
        <div className={style.investorList}>
          {render()}
        </div>
        <div className={style.invest}>
          <button className={style.investBtn}>Invest</button>
        </div>
      </div>
    </div>
  );
};

export default Funding;
