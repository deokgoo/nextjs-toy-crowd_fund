import React from 'react';
import style from './funding-introduce.module.scss';
import useFundingDetail from '../../pages/funding-detail/hooks/use-funding-detail';

const FundingIntroduce = ({fid}: {fid: string}) => {
  const { qrImg } = useFundingDetail(fid);

  return (
    <div id="funding-introduce" className={style.qrDescription}>
      <div className={style.container}>
        <div className={style.qr}>
          <img src={qrImg} alt="qr generate"/>
        </div>
        <div className={style.description}>
          this is my crowd funding. show me the money.
        </div>
      </div>
    </div>
  );
};

export default FundingIntroduce;
