import { upcoming } from "../data/events";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday, isSameDay } from "date-fns";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function UpcomingEvents() {
  const { language } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 4)); // May 2025
  
  // Get days for the current month
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
  const startDay = getDay(monthStart);
  
  // Create calendar grid with empty cells for days before the month starts
  const calendarDays = Array(startDay).fill(null).concat(monthDays);
  
  // Find events for this month
  const eventsThisMonth = upcoming.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === currentMonth.getMonth() && 
           eventDate.getFullYear() === currentMonth.getFullYear();
  });

  // Japanese day names
  const dayNames = {
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    jp: ["日", "月", "火", "水", "木", "金", "土"]
  };

  return (
    <section className="w-full py-8 bg-white">
      <h2 className="mb-6 text-center text-3xl font-semibold text-black">
        {language === 'en' ? 'Upcoming Events' : '今後のイベント'}
      </h2>
      
      <div className="mx-auto max-w-2xl px-4">
        {/* Calendar header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium text-black">
            {language === 'en' 
              ? format(currentMonth, "MMMM yyyy")
              : `${currentMonth.getFullYear()}年 ${currentMonth.getMonth() + 1}月`}
          </h3>
          <div className="flex space-x-2">
            <button 
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
              className="p-1 rounded-full bg-gray-100 hover:bg-white text-gray-600 shadow-sm hover:shadow-md transition-all"
            >
              ←
            </button>
            <button 
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
              className="p-1 rounded-full bg-gray-100 hover:bg-white text-gray-600 shadow-sm hover:shadow-md transition-all"
            >
              →
            </button>
          </div>
        </div>
        
        {/* Calendar grid */}
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
          {/* Day names */}
          <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
            {dayNames[language === 'en' ? 'en' : 'jp'].map((day, i) => (
              <div key={i} className="py-2 text-center text-sm font-medium text-gray-500">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar days */}
          <div className="grid grid-cols-7">
            {calendarDays.map((day, i) => {
              // Check if there's an event on this day
              const hasEvent = day && eventsThisMonth.some(event => 
                isSameDay(new Date(event.date), day)
              );
              
              // Find the event for this day (if any)
              const dayEvent = day && eventsThisMonth.find(event => 
                isSameDay(new Date(event.date), day)
              );
              
              return (
                <div 
                  key={i} 
                  className={`min-h-24 p-1 border-b border-r border-gray-200 ${
                    !day ? 'bg-gray-50' : 
                    isToday(day) ? 'bg-blue-50' : 
                    hasEvent ? 'bg-blue-50' : ''
                  }`}
                >
                  {day && (
                    <>
                      <div className={`text-right p-1 ${
                        isToday(day) ? 'text-blue-600 font-bold' : 
                        hasEvent ? 'text-blue-500 font-medium' : 'text-gray-700'
                      }`}>
                        {format(day, "d")}
                      </div>
                      
                      {hasEvent && (
                        <div className="mt-1 p-1 text-xs bg-white rounded border border-blue-400 shadow-sm">
                          <div className="font-medium text-blue-600">
                            {language === 'en' ? dayEvent.title : dayEvent.titleJp || dayEvent.title}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Event details */}
        <div className="mt-6 space-y-3">
          {eventsThisMonth.map((ev) => (
            <details
              key={ev.id}
              className="rounded-lg border border-gray-200 open:shadow-md transition-all duration-200"
            >
              <summary className="cursor-pointer py-3 px-4 font-medium bg-white hover:bg-gray-50 flex justify-between items-center">
                <span>
                  {language === 'en' ? ev.title : ev.titleJp || ev.title} — 
                  {language === 'en' 
                    ? format(new Date(ev.date), "PPP")
                    : `${new Date(ev.date).getFullYear()}年${new Date(ev.date).getMonth() + 1}月${new Date(ev.date).getDate()}日`}
                </span>
                <span className="text-uwjsa">→</span>
              </summary>

              {ev.description && (
                <div className="px-4 py-3 text-sm text-gray-700 bg-white">
                  {language === 'en' ? ev.description : ev.descriptionJp || ev.description}
                </div>
              )}
            </details>
          ))}
        </div>
        
        {/* Japanese-inspired decorative element */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-pink-200 via-uwjsa to-pink-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

