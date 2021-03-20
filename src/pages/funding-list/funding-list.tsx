import React, { useEffect, useState } from 'react';
import style from './funding-list.module.scss';
import { getMyList } from '../../services/fundingService';
import InvestorListUnit from '../../components/investor-list-unit';

const FundingList = () => {
  const [myList, setMyList] = useState<object[]>();

  useEffect(() => {
    const fetchData = async () => {
      const roomList = await getMyList();
      if(!roomList) return;
      setMyList(roomList);
    }
    fetchData();
  }, []);

  const render = () => {
    const mapToComponent = (investorList: any) => {
      if(!investorList) return;
      console.log(investorList)
      return investorList.map((x: any) => (<InvestorListUnit amount={x.targetMoney} name={x.title} fid={x.fid}/>));
    };

    return (
      <ul>
        <li className={style.item}>
          <div className={style.name}>
            Funding
          </div>
          <div className={style.amount}>
            Amount invested
          </div>
        </li>
        {mapToComponent(myList)}
      </ul>
    );
  }

  return (
    <div id="funding-list" className={style.fundingList}>
      {render()}
    </div>
  );
};

export default FundingList;
