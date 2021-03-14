import React from 'react';
import style from './funding.module.css';

const Funding = () => {
  return (
    <div id="funding" className={style.funding}>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Title</h1>
        </div>
        <div className={style.amount}>
          <h2>5000$</h2>
        </div>
        <div className="investor-list">

        </div>
        <div className="invest">
          <button>Invest</button>
        </div>
      </div>
    </div>
  );
};

export default Funding;
