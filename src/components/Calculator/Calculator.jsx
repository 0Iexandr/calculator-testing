import { useState } from 'react';
import DataChart from "../DataChart/DataChart";
import SliderControls from "../SliderControls/SliderControls";
import './Calculator.css'

function Calculator() {
  const [storageValue, setStorageValue] = useState(100);
  const [transferValue, setTransferValue] = useState(400);

  const backblazePrice = ((storageValue * 0.005) + (transferValue * 0.01)).toFixed(2);
  const vultrPrice = ((storageValue * 0.01) + (transferValue * 0.01)).toFixed(2);
  const bunnyHddPrice = ((storageValue * 0.01) + (transferValue * 0.01)).toFixed(2);
  const bunnySsdPrice = ((storageValue * 0.02) + (transferValue * 0.01)).toFixed(2);
  const scalewayMultiPrice = ((storageValue <= 75 ? 0 : (storageValue - 75) * 0.06) + 
  (transferValue <= 75 ? 0 : (transferValue - 75) * 0.02)).toFixed(2);
  const scalewaySinglePrice = ((storageValue <= 75 ? 0 : (storageValue - 75) * 0.03) + 
  (transferValue <= 75 ? 0 : (transferValue - 75) * 0.02)).toFixed(2);

  const priceList = {
    backblazePrice: backblazePrice < 7 ? (7).toFixed(2) : backblazePrice,
    bunnyHddPrice: bunnyHddPrice > 10 ? (10).toFixed(2) : bunnyHddPrice,
    bunnySsdPrice: bunnySsdPrice > 10 ? (10).toFixed(2) : bunnySsdPrice,
    scalewayMultiPrice: scalewayMultiPrice,
    scalewaySinglePrice: scalewaySinglePrice,
    vultrPrice: vultrPrice < 5 ? (5).toFixed(2) : vultrPrice
  };

  return (
    <div className='calc-container'>
      <h1 className='calc-title'>Calculator</h1>
      <SliderControls 
        storageValue={storageValue}
        setStorageValue={setStorageValue}
        transferValue={transferValue}
        setTransferValue={setTransferValue}
      />
      <DataChart priceList={priceList} />
    </div>
  );
}

export default Calculator;