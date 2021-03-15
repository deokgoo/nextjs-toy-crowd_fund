import React from 'react';
import { useParams } from 'react-router-dom';
import Funding from '../../components/funding';
import QrDescription from '../../components/qr-description';
import style from './funding-detail.module.css';

const FundingDetail = () => {
  const params = useParams<{id: string}>();

  return (
    <div id="funding-detail" className={style.fundingDetail}>
      <Funding fid={params.id} />
      <QrDescription fid={params.id}/>
    </div>
  );
};

export default FundingDetail;
