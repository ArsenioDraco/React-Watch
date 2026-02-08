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
  

  
