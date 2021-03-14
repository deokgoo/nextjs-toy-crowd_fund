import React from 'react';
import style from './qr-description.module.css'

const QrDescription = () => {
  return (
    <div id="qr-description" className={style.qrDescription}>
      <div className={style.container}>
        <div className={style.qr}>
          QR code
        </div>
        <div className={style.description}>
          this is my crowd funding. show me the money.
        </div>
      </div>
    </div>
  );
};

export default QrDescription;
