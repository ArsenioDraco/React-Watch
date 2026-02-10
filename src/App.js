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
    
