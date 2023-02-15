import { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import 'charts.css';
import './DataChart.css'

import backblaze from '../../assets/blze.svg';
import bunny from '../../assets/bunny.svg';
import scaleway from '../../assets/scaleway.svg';
import vultr from '../../assets/vultr.svg';

function DataChart({priceList}) {
  const [bunnyOption, setBunnyOption] = useState('HDD');
  const [scalewayOption, setScalewayOption] = useState('Multi');

  const backblazePrice = priceList.backblazePrice;
  const vultrPrice = priceList.vultrPrice;
  const bunnyPrice = bunnyOption === 'HDD' ? priceList.bunnyHddPrice : priceList.bunnySsdPrice;
  const scalewayPrice = scalewayOption === 'Multi' ? priceList.scalewayMultiPrice : priceList.scalewaySinglePrice;

  return (
    <table className='charts-css column datasets-spacing-20 position show-data-axes show-labels show-4-secondary-axes'>
      <caption> Calculator </caption>
      <tbody>
        <tr>
          <th scope='row'>
            <label className='chart-label'>
              <h3>Backblaze</h3>
              <img src={backblaze} alt='backblaze-logo' width='15' />
            </label>
          </th>
          <td style={{'--size': `calc( ${backblazePrice} / 100 )`}}>
            <span className='chart-span'>{backblazePrice} $</span>
          </td>
        </tr>
        <tr>
          <th scope='row' className='chart-label-container'>
            <label className='chart-label'>
              <h3>Bunny</h3>
              <img src={bunny} alt='bunny-logo' width='20' />
            </label>
            <FormControl>
              <RadioGroup
                aria-labelledby='demo-controlled-radio-buttons-group'
                name='controlled-radio-buttons-group'
                value={bunnyOption}
                onChange={(e) => setBunnyOption(prev => prev = e.target.value)}
              >
                <FormControlLabel value='HDD' control={<Radio size='small' />} label='HDD' />
                <FormControlLabel value='SSD' control={<Radio size='small' />} label='SSD' />
              </RadioGroup>
            </FormControl>
          </th>
          <td style={{'--size': `calc( ${bunnyPrice} / 100 )`}}>
            <span className='chart-span'>{bunnyPrice} $</span>
          </td>
        </tr>
        <tr>
          <th scope='row' className='chart-label-container'>
            <label className='chart-label'>
              <h3>Scaleway</h3>
              <img src={scaleway} alt='scaleway-logo' width='20' />
            </label>
            <FormControl>
              <RadioGroup
                aria-labelledby='demo-controlled-radio-buttons-group'
                name='controlled-radio-buttons-group'
                value={scalewayOption}
                onChange={(e) => setScalewayOption(prev => prev = e.target.value)}
              >
                <FormControlLabel value='Multi' control={<Radio size='small' />} label='Multi' />
                <FormControlLabel value='Single' control={<Radio size='small' />} label='Single' />
              </RadioGroup>
            </FormControl>
          </th>
          <td style={{'--size': `calc( ${scalewayPrice} / 100 )`, backgroundColor: 'var(--color-6)'}}>
            <span className='chart-span'>{scalewayPrice} $</span>
          </td>
        </tr>
        <tr>
          <th scope='row'>
            <label className='chart-label'>
              <h3>Vultr</h3>
              <img src={vultr} alt='vultr-logo' width='20' />
            </label>
          </th>
          <td style={{'--size': `calc( ${vultrPrice} / 100 )`, backgroundColor: 'var(--color-5)'}}>
            <span className='chart-span'>{vultrPrice} $</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default DataChart;