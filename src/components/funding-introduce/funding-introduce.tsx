import React from 'react';
import style from './funding-introduce.module.scss';
import useFundingDetail from '../../pages/funding-detail/hooks/use-funding-detail';
import SignOut from '../sign-out';
import 'tui-chart/dist/tui-chart.css';
import { PieChart } from '@toast-ui/react-chart';
import { PieChartOptions } from '@toast-ui/chart/types';
import { PieSeriesData } from '@toast-ui/chart/types/options';

const FundingIntroduce = ({fid}: {fid: string}) => {
  const { qrImg } = useFundingDetail(fid);
  const data: PieSeriesData = {
    categories: ['Browser'],
    series: [
      {
        name: 'Chrome',
        data: 46.02,
      },
      {
        name: 'IE',
        data: 20.47,
      },
      {
        name: 'Firefox',
        data: 17.71,
      },
      {
        name: 'Safari',
        data: 5.45,
      },
      {
        name: 'Opera',
        data: 3.1,
      },
      {
        name: 'Etc',
        data: 7.25,
      }
    ]
  }

  const options: PieChartOptions = {
    series: {
      dataLabels: {
        visible: true,
        pieSeriesName: {
          visible: true,
          anchor: 'outer'
        }
      }
    }
  };
  return (
    <div id="funding-introduce" className={style.fundingIntroduce}>
      <div className={style.container}>
        <div className={style.qr}>
          <img src={qrImg} alt="qr generate"/>
        </div>
        <PieChart
          data={data}
          options={options}
        />
        <div className={style.description}>
          Funding together
        </div>
        <SignOut />
      </div>
    </div>
  );
};

export default FundingIntroduce;
