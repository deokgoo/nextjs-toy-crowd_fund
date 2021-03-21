import React, { useEffect, useState } from 'react';
import styles from './funding-list.module.scss';
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

  const renderCreatedFundingList = () => {
    const mapToComponent = (investorList: any) => {
      if(!investorList) return;
      console.log(investorList)
      return investorList.map((x: any) => (<InvestorListUnit amount={x.targetMoney} name={x.title} fid={x.fid}/>));
    };

    return (
      <>
        <div className={styles.title}>作った<br/>ファンディング</div>
        <div className={styles.itemWrapper}>
          {mapToComponent(myList)}
        </div>
      </>
    );
  }

  const renderParticipatedFundingList = () => {
    const mapToComponent = (investorList: any) => {
      if(!investorList) return;
      console.log(investorList)
      return investorList.map((x: any) => (<InvestorListUnit amount={x.targetMoney} name={x.title} fid={x.fid}/>));
    };

    return (
      <>
        <div className={styles.title}>参加した<br/>ファンディング</div>
        <div className={styles.itemWrapper}>
          {mapToComponent(myList)}
        </div>
      </>
    )
  }

  return (
    <div id="funding-list" className={styles.fundingList}>
      <div className={styles.leftCard}>
        {renderCreatedFundingList()}
      </div>
      <div className={styles.rightCard}>
        {renderParticipatedFundingList()}
      </div>
    </div>
  );
};

export default FundingList;
