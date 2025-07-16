
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Building2, Phone, MapPin, Clock, Star } from 'lucide-react';

const Hospital = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const hospitals = [
    { id: 1, name: 'ধুনট সদর হাসপাতাল', type: 'সরকারি', address: 'ধুনট সদর, বগুড়া', phone: '01711000011', emergency: '999', departments: 'জরুরি, সাধারণ চিকিৎসা', rating: 4, avatar: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&h=150&fit=crop' },
    { id: 2, name: 'মা ও শিশু হাসপাতাল', type: 'বেসরকারি', address: 'ধুনট বাজার, বগুড়া', phone: '01711000012', emergency: '01711000012', departments: 'প্রসূতি, শিশু চিকিৎসা', rating: 5, avatar: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=150&h=150&fit=crop' },
    { id: 3, name: 'শিশু হাসপাতাল', type: 'বিশেষায়িত', address: 'ধুনট পৌরসভা, বগুড়া', phone: '01711000013', emergency: '01711000013', departments: 'শিশু চিকিৎসা, টিকা', rating: 4, avatar: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=150&h=150&fit=crop' },
    { id: 4, name: 'আই কেয়ার সেন্টার', type: 'বিশেষায়িত', address: 'ধুনট রেলস্টেশন, বগুড়া', phone: '01711000014', emergency: '01711000014', departments: 'চোখের চিকিৎসা, অপারেশন', rating: 5, avatar: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=150&h=150&fit=crop' },
    { id: 5, name: 'হার্ট কেয়ার হাসপাতাল', type: 'বিশেষায়িত', address: 'ধুনট সদর, বগুড়া', phone: '01711000015', emergency: '01711000015', departments: 'হৃদরোগ, কার্ডিয়াক সার্জারি', rating: 5, avatar: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=150&h=150&fit=crop' },
    { id: 6, name: 'জেনারেল হাসপাতাল', type: 'বেসরকারি', address: 'ধুনট বাজার, বগুড়া', phone: '01711000016', emergency: '01711000016', departments: 'সাধারণ চিকিৎসা, সার্জারি', rating: 3, avatar: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&h=150&fit=crop' },
    { id: 7, name: 'ক্যান্সার কেয়ার সেন্টার', type: 'বিশেষায়িত', address: 'ধুনট পৌরসভা, বগুড়া', phone: '01711000017', emergency: '01711000017', departments: 'ক্যান্সার চিকিৎসা, কেমোথেরাপি', rating: 4, avatar: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=150&h=150&fit=crop' },
    { id: 8, name: 'অর্থো স্পেশালাইজড হাসপাতাল', type: 'বিশেষায়িত', address: 'ধুনট সদর, বগুড়া', phone: '01711000018', emergency: '01711000018', departments: 'হাড়ের চিকিৎসা, ফিজিওথেরাপি', rating: 4, avatar: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=150&h=150&fit=crop' },
    { id: 9, name: 'নিউরো হাসপাতাল', type: 'বিশেষায়িত', address: 'ধুনট রেলস্টেশন, বগুড়া', phone: '01711000019', emergency: '01711000019', departments: 'স্নায়ু রোগ, ব্রেইন সার্জারি', rating: 5, avatar: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=150&h=150&fit=crop' },
    { id: 10, name: 'কিডনি কেয়ার সেন্টার', type: 'বিশেষায়িত', address: 'ধুনট বাজার, বগুড়া', phone: '01711000020', emergency: '01711000020', departments: 'কিডনি চিকিৎসা, ডায়ালাইসিস', rating: 4, avatar: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=150&h=150&fit=crop' }
  ];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hospital.departments.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || hospital.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleMapClick = (hospitalName: string) => {
    const searchQuery = encodeURIComponent(`${hospitalName} ধুনট বগুড়া`);
    window.open(`https://www.google.com/maps/search/${searchQuery}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Building2 className="mr-2" size={20} />
            <h1 className="text-lg font-bold">হাসপাতাল</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="হাসপাতাল খুঁজুন..."
          filterOptions={[
            { value: 'all', label: 'সব ধরনের' },
            { value: 'সরকারি', label: 'সরকারি' },
            { value: 'বেসরকারি', label: 'বেসরকারি' },
            { value: 'বিশেষায়িত', label: 'বিশেষায়িত' }
          ]}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredHospitals.map((hospital) => (
              <div key={hospital.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-3 mb-3">
                  <img 
                    src={hospital.avatar} 
                    alt={hospital.name}
                    className="w-16 h-16 rounded-lg object-cover border-2 border-red-200"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-base">{hospital.name}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <Star size={12} className="text-yellow-500" />
                      <span className="text-xs text-gray-600">{hospital.rating}</span>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                        {hospital.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{hospital.address}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.open(`tel:${hospital.phone}`, '_self')}
                      className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
                      title="কল করুন"
                    >
                      <Phone size={16} />
                    </button>
                    <button
                      onClick={() => handleMapClick(hospital.name)}
                      className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      title="ম্যাপে দেখুন"
                    >
                      <MapPin size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Building2 size={14} className="mr-2 text-gray-400" />
                    <span>বিভাগ: {hospital.departments}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>জরুরি: {hospital.emergency}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Hospital;
