import React from 'react';
import { useEffect, useState } from 'react';
import cat from '../assets/cat.mp3';

export function Clock() {
    const [startTime, setStartTime] = useState(0);
    const audio = new Audio(cat);
    const timeToStop = 20 * 60 * 1000; // = 20 minutes
    let interval;

    useEffect(()=>{
      //console.log('useEffect called');
      if(startTime) {
        interval = setInterval(() => {
        console.log('interval called');
        checkElapsedTimeSinceStart();
      }, 1000); 
      }
      return ()=>{
        if(interval){
          clearInterval(interval);
          //console.log('interval cleared');
        }
      }
    }, [startTime]);

    function checkElapsedTimeSinceStart() {
      //console.log('checkElapsedTimeSinceStart fn called');
      //if (!startTime) return;
      const timeElapsed = Date.now() - startTime;
      if (timeElapsed >= timeToStop) {
        setStartTime(0);
        document.title = `Please take a break`;
        audio.play();
        const alertInterval = setInterval(()=>{
          if(document.title === 'Please'){
            document.title = `Please take a break`;
          } else {
            document.title = `Please`;
          }
        }, 1000);
        setTimeout(() => {
          audio.pause();
          clearInterval(alertInterval);
          document.title = `Hit the start button !`;
        }, 20000);
      } else {
        const countDown = 20 - Math.floor(timeElapsed/1000/60);
        document.title = `${countDown} ${countDown > 1 ? 'minutes' : 'minute'} left`;
      }
    }

    function startTimer() {
      //console.log('StartOver fn called');
      setStartTime(Date.now());
    }
  
    return (
      <>
        <button onClick={startTimer} disabled={startTime}>
            START
        </button>
      </>
    )
}