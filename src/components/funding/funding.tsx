import React, { useEffect, useState } from 'react';
import style from './funding.module.scss';
import ApiService from '../../services/apiService';
import { useHistory } from 'react-router-dom';

export type AmountType = {
  created_at: Date,
  money: number,
  userId: string,
  name: string,
  msg: string,
}

const Funding = ({fid}: {fid: string}) => {
  const [investorList, setInvestorList] = useState<AmountType[]>([]);
  const [crowdInfo, setCrowdInfo] = useState<any>();
  const history = useHistory();
  useEffect(() => {
    const fetchCrowdInfo = async () => {
      const info = await ApiService.instance.getInfoByFid(fid);
      setCrowdInfo(info);
    }
    const fetchInvestor = async () => {
      const list = await ApiService.instance.getInvestorListByFid(fid);
      await setInvestorList(list);
    }
    fetchCrowdInfo();
    setInterval(() => {
      fetchInvestor();
    }, 1500);
  }, [fid]);

  const getFormatDate = (created: Date): string => {
    const date = new Date(created);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${year}-${month}-${day} ${hour}:${minute}`;
  }

  const render = () => {
    if(!investorList) return<></>
    return (
      <div className={style.investorList}>
        {investorList.map((x, idx) =>
          <div className={style.investItem}>
            <div className={style.wrapper} key={idx}>
              <div className={style.name}>{x.name}</div>
              <div className={style.money}>{x.money}¥</div>
            </div>
            <div className={style.created}>{getFormatDate(x.created_at)}</div>
            <div className={style.msg}>{x.msg}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div id="funding" className={style.funding}>
      <h2 className={style.title}>{crowdInfo?.title}</h2>
      <div className={style.amount}>
        <h2>{investorList?.reduce<number>((accumulator, currentValue) => accumulator + parseInt(String(currentValue.money)), 0)} ¥</h2>
      </div>
      <div className={style.container}>
        <div className={style.investorList}>
          {render()}
        </div>
      </div>
      <button className={style.investBtn} onClick={() => history.push(`/funding/${fid}/invest`)}>入金</button>
    </div>
  );
};

export default Funding;
