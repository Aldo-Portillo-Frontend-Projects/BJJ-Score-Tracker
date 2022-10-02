import React from 'react'
import {useTimer} from 'react-timer-hook'

function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      start,
      pause,
      resume,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), autoStart: false });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
    </div>
  );
}



function Timer (props) {
    const time = new Date();
    console.log(props.time)
    time.setSeconds(time.getSeconds() + props.time);

  return (
    <div>
      {props.timeSet && <MyTimer expiryTimestamp={time} />}
    </div>
  );
}

export default Timer