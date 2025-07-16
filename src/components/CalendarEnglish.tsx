
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarEnglish = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <h3 className="text-lg font-semibold text-center mb-3 text-primary">
        English Calendar
      </h3>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border-0 shadow-none"
      />
    </div>
  );
};

export default CalendarEnglish;
