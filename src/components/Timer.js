import React from 'react'

export default function Timer (props) {

    const [timer, setTimer] = React.useState('00:00')

    const Ref = React.useRef(null);

    function getTimeRemaining (e) {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }

    function startTimer(e) {
        let { total, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {
  
        setTimer('05:00');
  
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        deadline.setSeconds(deadline.getSeconds() + 300);
        return deadline;
    }

    React.useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    }


    return (
        <div className='timer'>
            <h2>{timer}</h2>
            <button onClick={onClickReset}>Reset</button>
        </div>
    )
}