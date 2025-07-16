
import { useState } from "react";

const CalendarBengali = () => {
  const [currentDate] = useState(new Date());
  
  const bengaliMonths = [
    'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
    'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
  ];

  const bengaliDays = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্র', 'শনি'];
  
  const getBengaliDate = () => {
    // Simple Bengali date calculation (approximate)
    const year = currentDate.getFullYear() - 593;
    const month = bengaliMonths[currentDate.getMonth()];
    const day = currentDate.getDate();
    const dayName = bengaliDays[currentDate.getDay()];
    
    return { year, month, day, dayName };
  };

  const bengaliDate = getBengaliDate();

  return (
    <div className="text-center space-y-2 border-r pr-4">
      <h3 className="text-lg font-semibold text-primary font-bengali mb-3">
        বাংলা ক্যালেন্ডার
      </h3>
      <div className="text-xl font-bold text-primary font-bengali">
        {bengaliDate.day} {bengaliDate.month}
      </div>
      <div className="text-lg text-muted-foreground font-bengali">
        {bengaliDate.year} বঙ্গাব্দ
      </div>
      <div className="text-sm text-muted-foreground font-bengali">
        {bengaliDate.dayName}বার
      </div>
    </div>
  );
};

export default CalendarBengali;
