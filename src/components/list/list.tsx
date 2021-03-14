import React from 'react';
import ListUnit from '../list-unit';
import style from './list.module.css';

const List = () => {
  const render = () => {
    const mapToComponent = (investorList: Array<string>) => {
      return investorList.map((investor, i) => {
        return (<ListUnit />);
      });
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
        {mapToComponent(['funding1', 'funding2', 'funding3', 'funding4'])}
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
