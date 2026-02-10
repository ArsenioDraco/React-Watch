import React, { useEffect, useState } from 'react';

const Watch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const utcHours = time.getUTCHours();
  const utcMinutes = time.getUTCMinutes();
  const utcSeconds = time.getUTCSeconds();

  const hourDeg = (utcHours % 12) * 30 + utcMinutes * 0.5;
  const minuteDeg = utcMinutes * 6 + utcSeconds * 0.1;
  const secondDeg = utcSeconds * 6;
  
  const watchStyle = {
    position: 'relative',
    width: '300px',
    height: '300px',
    border: '16px solid #444',
    borderRadius: '50%',
    background: 'radial-gradient(#222, #000)',
    boxShadow: '0 0 20px rgba(0,0,0,0.8)',
    margin: 'auto'
  };

  const dialBaseStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transformOrigin: '0% 50%',
    transition: 'transform 0.05s linear'
  };
    
  const centerDotStyle = {
    position: 'absolute',
    width: '12px',
    height: '12px',
    background: '#fff',
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10
  };

  return (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1e1e1e' }}>
      <div style={watchStyle}>
        <div style={{...dialBaseStyle, width: '35%', height: '4px', background: '#fff', transform: `rotate(${hourDeg}deg)` }} />
        <div style={{...dialBaseStyle, width: '45%', height: '3px', background: '#0f0', transform: `rotate(${minuteDeg}deg)` }} />
        <div style={{...dialBaseStyle, width: '50%', height: '2px', background: '#f00', transform: `rotate(${secondDeg}deg)` }} />
        <div style={centerDotStyle} />
      </div>
    </div>
  );
};
export default: Watch;
