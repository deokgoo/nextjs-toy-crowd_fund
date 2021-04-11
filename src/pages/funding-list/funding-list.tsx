import React, { useEffect, useState } from 'react';
import styles from './funding-list.module.scss';
import { getMyList } from '../../services/fundingService';
import InvestorListUnit from '../../components/investor-list-unit';
import { useHistory } from 'react-router-dom';

const FundingList = () => {
  const [myList, setMyList] = useState<object[]>();
  const [toggle, setToggle] = useState<boolean>(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const roomList = await getMyList();
      if(!roomList) return;
      setMyList(roomList);
    }
    fetchData();
  }, []);

  const renderList = () => {
    const mapToComponent = (investorList: any) => {
      if(!investorList) return;
      console.log(investorList)
      return investorList.map((x: any) => (<InvestorListUnit amount={x.targetMoney} name={x.title} fid={x.fid}/>));
    };

    return toggle ? (
      <>
        <div className={styles.toggleBtn}>
          <div className={styles.on}>作ったカード</div>
          <div className={styles.off} onClick={() => setToggle(false)}>参加したカード</div>
        </div>
        <div className={styles.title}>作った<br/>ファンディング</div>
        <div className={styles.itemWrapper}>
          {mapToComponent(myList)}
        </div>
      </>
    ) : (
      <>
        <div className={styles.toggleBtn}>
          <div className={styles.off} onClick={() => setToggle(true)}>作ったカード</div>
          <div className={styles.on}>参加したカード</div>
        </div>
        <div className={styles.title}>参加した<br/>ファンディング</div>
        <div className={styles.itemWrapper}>
          {mapToComponent(myList)}
        </div>
      </>
    );
  }

  return (
    <div id="funding-list" className={styles.fundingList}>
      <div className={styles.wrapper}>
        <div className={styles.leftCard}>
          {renderList()}
        </div>
      </div>
      <button className={styles.tmp} onClick={() => history.push('/funding/create')}>create Funding</button>
    </div>
  );
};

export default FundingList;
