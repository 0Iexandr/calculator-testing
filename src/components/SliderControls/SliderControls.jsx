import { Slider } from '@mui/material';
import './SliderControls.css';

function SliderControls({storageValue, setStorageValue, transferValue, setTransferValue}) {

  return (
    <div className='control-container'>
      <label className='control-label'>
        <h2>Storage: {storageValue} GB</h2>
        <Slider
         size='small'
         defaultValue={storageValue} 
         value={storageValue}
         aria-label='Default' 
         valueLabelDisplay='auto' 
         max={1000}
         step={1}
         onChange={(e) => setStorageValue(prev => prev = e.target.value)}
         />
      </label>
      <label className='control-label'>
        <h2>Transfer: {transferValue} GB</h2>
        <Slider
         size='small'
         defaultValue={transferValue} 
         value={transferValue}
         aria-label='Default' 
         valueLabelDisplay='auto' 
         max={1000}
         step={1}
         onChange={(e) => setTransferValue(prev => prev = e.target.value)}
         />
      </label>
    </div>
  );
}

export default SliderControls;