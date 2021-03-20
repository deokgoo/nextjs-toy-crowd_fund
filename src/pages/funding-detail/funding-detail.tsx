import React from 'react';
import { useParams } from 'react-router-dom';
import Funding from '../../components/funding';
import FundingIntroduce from '../../components/funding-introduce';
import style from './funding-detail.module.scss';

const FundingDetail = () => {
  const params = useParams<{id: string}>();

  return (
    <div id="funding-detail" className={style.fundingDetail}>
      <Funding fid={params.id} />
      <FundingIntroduce fid={params.id}/>
    </div>
  );
};

export default FundingDetail;
