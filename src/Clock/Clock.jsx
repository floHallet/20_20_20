import React from 'react';
import { useEffect, useState } from 'react';

export function Clock() {
    const [startTime, setStartTime] = useState(0);
    const audio = new Audio("/20_20_20/cat.mp3");
    const timeToStop = 20 * 60 * 1000; // 20 minutes

    /*useEffect(() => {
      //document.title = `${new Date().toLocaleTimeString()}`
    })*/

    useEffect(()=>{
      const interval = setInterval(() => {
        //console.log('interval called');
        checkElapsedTimeSinceStart();
      }, 1000);
      return ()=>{
        clearInterval(interval);
        //console.log('interval cleared');
      }
    }, [startTime]);

    function checkElapsedTimeSinceStart() {
      //console.log('checkElapsedTimeSinceStart fn called');
      if (!startTime) return;
      const timeElapsed = Date.now() - startTime;
      document.title = Math.floor(timeElapsed/1000)
      if (timeElapsed >= timeToStop) {
        audio.play();
        setTimeout(() => {
          audio.pause();
          setStartTime(0);
        }, 20000);
      }
    }

    function startTimer() {
      //console.log('StartOver fn called');
      setStartTime(Date.now());
    }
  
    return (
      <>
        <button onClick={startTimer} disabled={startTime}>
            {startTime ? `counting... !` : 'Start !'}
        </button>
      </>
    )
}