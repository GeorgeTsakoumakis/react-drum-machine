import Drumpad from './Drumpad';
import { useState } from 'react'

export default function PadBank(props) { 
    const [activeKey, setActiveKey] = useState('');

    const bankTwo = [ 
        { id: 'Chord-1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
        { id: 'Chord-2', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },
        { id: 'Chord-3', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },
        { id: 'Shaker', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
        { id: 'Open-HH', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },
        { id: 'Closed-HH', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
        { id: "Punchy-Kick", letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        { id: 'Side-Stick', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
        { id: 'Snare', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' }
    ]

    const bankOne = [
        { id: 'Heater-1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
        { id: 'Heater-2', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
        { id: 'Heater-3', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
        { id: 'Heater-4', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
        { id: 'Clap', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
        { id: 'Open-HH', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
        { id: "Kick-n'-Hat", letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        { id: 'Kick', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
        { id: 'Closed-HH', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
    ]

    function handleClick(i) {
        const audio = document.getElementById(i);
        const parent = audio.parentNode;
        /* round slider value to 1 decimal place and set volume to that value */
        audio.volume = Number.isFinite(Math.round(props.sliderVal)) ? props.sliderVal : 0.5;
        (props.power && audio.play()) /* TODO: Fix this */
        props.setDisplay(parent.id)
        setTimeout(() => {
            props.setDisplay('')},1000)
    }

    return (
        <div className='pad-bank'>
            {/* Create drumpads from bankOne if props.bank='Heater Kit', else create drumpads from bankTwo */
            props.bank === 'Heater Kit' ? bankOne.map((drumpad) => {
                return <Drumpad id={drumpad.id} key={drumpad.id} keyTrigger={drumpad.letter} src={drumpad.src} onDrumClick={() => handleClick(drumpad.letter)} active={activeKey} setActiveKey={setActiveKey}/>
            }) : bankTwo.map((drumpad) => {
                return <Drumpad id={drumpad.id} key={drumpad.id} keyTrigger={drumpad.letter} src={drumpad.src} onDrumClick={() => handleClick(drumpad.letter)} active={activeKey} setActiveKey={setActiveKey}/>
            })}
        </div>
    ) 
}