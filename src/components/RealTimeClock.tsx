
import { useState, useEffect } from 'react';

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('bn-BD', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('bn-BD', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mx-2 mb-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-primary mb-1 font-bengali">
          {formatTime(time)}
        </div>
        <div className="text-sm text-muted-foreground font-bengali">
          {formatDate(time)}
        </div>
      </div>
    </div>
  );
};

export default RealTimeClock;
