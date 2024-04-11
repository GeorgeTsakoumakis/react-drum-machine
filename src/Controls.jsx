import { useState, useEffect, useRef } from "react";
import PadBank from './PadBank';

export default function Controls() {
    const [power, setPower] = useState(true);
    const [display, setDisplay] = useState(String.fromCharCode(160));
    const [bank, setBank] = useState('Heater Kit');
    const [sliderVal, setSliderVal] = useState(0.3);

    useEffect(() => {
        /* Change float of .inner to left or right depending on power state */
        const inner = document.querySelector('.inner');
        inner.style.cssFloat = power ? 'right' : 'left';
    }, [power]);

    useEffect(() => {
        const inner = document.getElementById('bank');
        inner.style.cssFloat = bank === 'Heater Kit' ? 'right' : 'left';
    }, [bank]);

    const powerControl = () => {
        setPower(power => !power);
        setDisplay(String.fromCharCode(160));
    }

    const adjustVolume = (e) => {
        if (power) {
            setDisplay('Volume: ' + Math.round(e.target.value * 100));
            setSliderVal(e.target.value);
            setTimeout(() => setDisplay(String.fromCharCode(160)), 1000);
        }
    }

    const didMount = useRef(false);

    const selectBank = () => {
        if (power) {
        setBank(prevBank => prevBank === 'Heater Kit' ? 'Smooth Piano Kit' : 'Heater Kit');
        }
    };

  useEffect(() => {
    // Return early if this is the first render
    if (!didMount.current) {
        didMount.current = true;
        return;
    }
    // Code to be executed on subsequent renders
    setDisplay('Bank: ' + bank);
    setTimeout(() => setDisplay(String.fromCharCode(160)), 1000);
  }, [bank]);

    return (
        <>
        <PadBank power={power} bank={bank} sliderVal={sliderVal} setDisplay={setDisplay}/>
        <div className='controls-container'>
            <div className='control'>
                <p>Power</p>
                <div className='select' onClick={powerControl}>
                    <div className='inner' id='power'></div> {/* float left or right depending on state */}
                </div>
            </div>
            <p id='display'>{display}</p>
            <div className='volume-slider'>
                <input
                max='1'
                min='0'
                onChange={adjustVolume}
                step='0.01'
                type='range'
                value={sliderVal}
                />
            </div>
            <div className='control'>
                <p>Bank</p>
                <div className='select' onClick={selectBank}>
                <div className='inner' id='bank'></div>
                </div>
            </div>
        </div>
        </>
    );
    }