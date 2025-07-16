
import { useState } from "react";

const CalendarArabic = () => {
  const [currentDate] = useState(new Date());
  
  const arabicMonths = [
    'মুহাররম', 'সফর', 'রবিউল আউয়াল', 'রবিউস সানি', 'জমাদিউল আউয়াল', 'জমাদিউস সানি',
    'রজব', 'শাবান', 'রমজান', 'শাওয়াল', 'জিলকদ', 'জিলহজ'
  ];

  const arabicDays = ['আহাদ', 'ইসনাইন', 'সুলাসা', 'আরবা', 'খামিস', 'জুমা', 'সাবত'];
  
  const getHijriDate = () => {
    // Simple Hijri date calculation (approximate)
    const hijriYear = Math.floor((currentDate.getFullYear() - 622) * 1.030684);
    const month = arabicMonths[currentDate.getMonth()];
    const day = currentDate.getDate();
    const dayName = arabicDays[currentDate.getDay()];
    
    return { year: hijriYear, month, day, dayName };
  };

  const hijriDate = getHijriDate();

  return (
    <div className="text-center space-y-2 pl-4">
      <h3 className="text-lg font-semibold text-primary font-bengali mb-3">
        আরবি ক্যালেন্ডার
      </h3>
      <div className="text-xl font-bold text-primary font-bengali">
        {hijriDate.day} {hijriDate.month}
      </div>
      <div className="text-lg text-muted-foreground font-bengali">
        {hijriDate.year} হিজরি
      </div>
      <div className="text-sm text-muted-foreground font-bengali">
        {hijriDate.dayName}
      </div>
    </div>
  );
};

export default CalendarArabic;
