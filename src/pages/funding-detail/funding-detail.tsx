import React from 'react';
import { useParams } from 'react-router-dom';
import Funding from '../../components/funding';
import QrDescription from '../../components/qr-description';
import style from './funding-detail.module.css';

const FundingDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <div id="funding-detail" className={style.fundingDetail}>
      <Funding />
      <QrDescription />
    </div>
  );
};

export default FundingDetail;
