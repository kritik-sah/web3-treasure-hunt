import React, { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'

const Celebration = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initial size
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div><ReactConfetti width={windowSize.width} height={windowSize.height} recycle={false} gravity={0.1} numberOfPieces={500}/></div>
  )
}

export default Celebration