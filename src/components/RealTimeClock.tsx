
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

  const getBengaliDate = () => {
    const bengaliMonths = [
      'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
      'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
    ];
    const bengaliDays = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্র', 'শনি'];
    
    const year = time.getFullYear() - 593;
    const month = bengaliMonths[time.getMonth()];
    const day = time.getDate();
    const dayName = bengaliDays[time.getDay()];
    
    return `${dayName}বার, ${day} ${month} ${year} বঙ্গাব্দ`;
  };

  const getHijriDate = () => {
    const arabicMonths = [
      'মুহাররম', 'সফর', 'রবিউল আউয়াল', 'রবিউস সানি', 'জমাদিউল আউয়াল', 'জমাদিউস সানি',
      'রজব', 'শাবান', 'রমজান', 'শাওয়াল', 'জিলকদ', 'জিলহজ'
    ];
    const arabicDays = ['আহাদ', 'ইসনাইন', 'সুলাসা', 'আরবা', 'খামিস', 'জুমা', 'সাবত'];
    
    const hijriYear = Math.floor((time.getFullYear() - 622) * 1.030684);
    const month = arabicMonths[time.getMonth()];
    const day = time.getDate();
    const dayName = arabicDays[time.getDay()];
    
    return `${dayName}, ${day} ${month} ${hijriYear} হিজরি`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mx-2 mb-4">
      <div className="text-center space-y-2">
        <div className="text-2xl font-bold text-primary mb-1 font-bengali">
          {formatTime(time)}
        </div>
        <div className="text-sm text-muted-foreground font-bengali">
          {formatDate(time)}
        </div>
        <div className="text-sm text-muted-foreground font-bengali">
          {getBengaliDate()}
        </div>
        <div className="text-sm text-muted-foreground font-bengali">
          {getHijriDate()}
        </div>
      </div>
    </div>
  );
};

export default RealTimeClock;
