import React, { useEffect, useState } from 'react';
import ListUnit from '../list-unit';
import style from './list.module.css';
import { getMyList } from '../../services/fundingService';

const List = () => {
  const [myList, setMyList] = useState<object[]>();
  useEffect(() => {
    const fetchData = async () => {
      const roomList = await getMyList();
      if(!roomList) return;
      setMyList(roomList);
    }
    fetchData();
  }, [])
  const render = () => {
    const mapToComponent = (investorList: any) => {
      if(!investorList) return;
      console.log(investorList)
      return investorList.map((x: any) => (<ListUnit amount={x.targetMoney} name={x.title} fid={x.fid}/>));
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
    <div id="list" className={style.list}>
      {render()}
    </div>
  );
};

export default List;
