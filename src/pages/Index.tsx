
import TopNavigation from '../components/TopNavigation';
import BottomNavigation from '../components/BottomNavigation';
import BannerSlider from '../components/BannerSlider';
import NoticeMarquee from '../components/NoticeMarquee';
import ServiceGrid from '../components/ServiceGrid';
import PWAInstallPrompt from '../components/PWAInstallPrompt';
import RealTimeClock from '../components/RealTimeClock';
import CalendarEnglish from '../components/CalendarEnglish';
import CalendarBengali from '../components/CalendarBengali';
import CalendarArabic from '../components/CalendarArabic';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-bengali">
      <PWAInstallPrompt />
      <TopNavigation />
      
      {/* Main Content */}
      <div className="pt-12">
        <BannerSlider />
        <NoticeMarquee />
        
        {/* Scrollable Service Grid */}
        <div className="overflow-y-auto">
          <ServiceGrid />
          
          {/* Real Time Clock */}
          <RealTimeClock />
          
          {/* Calendars Section - Without heading */}
          <div className="px-2 space-y-4 mb-20">
            {/* English Calendar - Full width */}
            <CalendarEnglish />
            
            {/* Bengali and Arabic Calendars - Combined in single card */}
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <div className="grid grid-cols-2 gap-4">
                <CalendarBengali />
                <CalendarArabic />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Index;
