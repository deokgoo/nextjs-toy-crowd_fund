import React, { useEffect, useState } from 'react';
import style from './qr-description.module.css';
import useFundingDetail from '../../pages/funding-detail/hooks/use-funding-detail';

const QrDescription = ({fid}: {fid: string}) => {
  const { qrImg } = useFundingDetail(fid);

  return (
    <div id="qr-description" className={style.qrDescription}>
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

export default QrDescription;
