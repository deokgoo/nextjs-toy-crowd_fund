import React, { useEffect, useState } from 'react';
import style from './funding.module.css';
import ApiService from '../../services/apiService';
import { useHistory } from 'react-router-dom';

export type AmountType = {
  created_at: Date,
  money: number,
  userId: string
}

const Funding = ({fid}: {fid: string}) => {
  const [investorList, setInvestorList] = useState<AmountType[]>([]);
  const [crowdInfo, setCrowdInfo] = useState<any>();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      const list = await ApiService.instance.getInvestorListByFid(fid);
      const info = await ApiService.instance.getInfoByFid(fid);

      setInvestorList(list);
      setCrowdInfo(info);
    }
    fetchData();
  }, [fid])

  const render = () => {
    if(!investorList) return<></>
    return (
      <ul>
        {investorList.map((x, idx) =>
          <li className={style.investor} key={idx}>
            <div className={style.investor__name}>{x.userId}</div>
            <div className={style.investor__money}>{x.money}</div>
          </li>
        )}
      </ul>
    );
  }

  return (
    <div id="funding" className={style.funding}>
      <div className={style.container}>
        <div className={style.title}>
          <h1>{crowdInfo?.title}</h1>
        </div>
        <div className={style.amount}>
          <h2>{investorList?.reduce<number>((accumulator, currentValue, currentIndex) => accumulator + parseInt(String(currentValue.money)), 0)}</h2>
        </div>
        <div className={style.investorList}>
          {render()}
        </div>
        <div className={style.invest}>
          <button className={style.investBtn} onClick={() => history.push(`/funding/${fid}/invest`)}>Invest</button>
        </div>
      </div>
    </div>
  );
};

export default Funding;
