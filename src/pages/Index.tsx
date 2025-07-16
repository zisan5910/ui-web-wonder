
import TopNavigation from '../components/TopNavigation';
import BottomNavigation from '../components/BottomNavigation';
import BannerSlider from '../components/BannerSlider';
import NoticeMarquee from '../components/NoticeMarquee';
import ServiceGrid from '../components/ServiceGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      {/* Main Content */}
      <div className="pt-12">
        <BannerSlider />
        <NoticeMarquee />
        
        {/* Scrollable Service Grid */}
        <div className="overflow-y-auto">
          <ServiceGrid />
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Index;
