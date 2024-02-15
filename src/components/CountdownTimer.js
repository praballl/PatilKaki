import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const initialTime = 600; // 10 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className='make-center'>
      <h3>Time left to sign up: {formatTime(timeRemaining)}</h3>
      {/* Add your CTA or other content here */}
    </div>
  );
};

export default CountdownTimer;
