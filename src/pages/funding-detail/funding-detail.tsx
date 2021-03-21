import React from 'react';
import { useParams } from 'react-router-dom';
import Funding from '../../components/funding';
import FundingIntroduce from '../../components/funding-introduce';
import styles from './funding-detail.module.scss';

const FundingDetail = () => {
  const params = useParams<{id: string}>();

  return (
    <div id="funding-detail" className={styles.fundingDetail}>
      <div className={styles.fundingWrapper}>
        <Funding fid={params.id} />
      </div>
      <div className={styles.fundingIntroduceWrapper}>
        <FundingIntroduce fid={params.id}/>
      </div>
    </div>
  );
};

export default FundingDetail;
