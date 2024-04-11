import './App.css';
import { useEffect } from 'react';

export default function Drumpad(props) {
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key.toUpperCase() === props.keyTrigger) {
                props.setActiveKey(props.keyTrigger);
                props.onDrumClick();
                setTimeout(() => props.setActiveKey(''), 100);
            }
        };
        document.addEventListener('keydown', handleKeyDown, true);
    }, [props]);



    return (
        <div
        className='drum-pad ' {...props.active === props.keyTrigger ? {style: {backgroundColor: 'orange', marginTop: '13px', boxShadow: 'orange 0px 3px', height: '77px'}} : ''}
        id={props.id}
        onClick={props.onDrumClick}
        >
        <audio className='clip' id={props.keyTrigger} src={props.src} />
        {props.keyTrigger}
        </div>
    );
}
