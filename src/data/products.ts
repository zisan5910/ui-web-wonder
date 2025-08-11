export interface Product {
  id: string;
  name: string;
  category: string;
  oldPrice?: number;
  price: number;
  imageUrl: string;
  stock: number;
  description: string;
}

export const categories = [
  'গ্যাস সিলিন্ডার',
  'সেভেন রিংস সিমেন্ট',
  'মোবাইল',
  'ইলেকট্রনিক্স',
  'মোবিল',
  'পেট্রোল',
  'স্যানেটারি',
  'পাইপ',
  'বিয়ারিং',
  'রং',
  'বিদ্যুৎ',
  'ফ্যান',
  'লাইট',
  'তার',
  'আরও অন্যান্য'
];

export const products: Product[] = [
  // গ্যাস সিলিন্ডার
  {
    id: '1',
    name: 'গ্যাস সিলিন্ডার ১২ কেজি',
    category: 'গ্যাস সিলিন্ডার',
    oldPrice: 3200,
    price: 2850,
    imageUrl: '/api/placeholder/300/300',
    stock: 25,
    description: 'উচ্চ মানের গ্যাস সিলিন্ডার। নিরাপদ এবং দীর্ঘস্থায়ী ব্যবহারের জন্য উপযুক্ত।'
  },
  {
    id: '9',
    name: 'গ্যাস সিলিন্ডার ৫ কেজি',
    category: 'গ্যাস সিলিন্ডার',
    oldPrice: 1800,
    price: 1650,
    imageUrl: '/api/placeholder/300/300',
    stock: 35,
    description: 'ছোট পরিবারের জন্য উপযুক্ত ৫ কেজি গ্যাস সিলিন্ডার।'
  },
  {
    id: '10',
    name: 'গ্যাস সিলিন্ডার ২০ কেজি',
    category: 'গ্যাস সিলিন্ডার',
    oldPrice: 4500,
    price: 4200,
    imageUrl: '/api/placeholder/300/300',
    stock: 15,
    description: 'বড় পরিবার এবং রেস্তোরাঁর জন্য ২০ কেজি গ্যাস সিলিন্ডার।'
  },
  {
    id: '11',
    name: 'গ্যাস রেগুলেটর',
    category: 'গ্যাস সিলিন্ডার',
    oldPrice: 450,
    price: 380,
    imageUrl: '/api/placeholder/300/300',
    stock: 50,
    description: 'উন্নত মানের গ্যাস রেগুলেটর। নিরাপদ গ্যাস সরবরাহের জন্য।'
  },
  {
    id: '12',
    name: 'গ্যাস পাইপ ১ মিটার',
    category: 'গ্যাস সিলিন্ডার',
    price: 150,
    imageUrl: '/api/placeholder/300/300',
    stock: 100,
    description: 'মানসম্পন্ন গ্যাস পাইপ। দীর্ঘস্থায়ী এবং নিরাপদ।'
  },

  // সেভেন রিংস সিমেন্ট
  {
    id: '2',
    name: 'সেভেন রিংস সিমেন্ট ৫০ কেজি',
    category: 'সেভেন রিংস সিমেন্ট',
    oldPrice: 650,
    price: 620,
    imageUrl: '/api/placeholder/300/300',
    stock: 150,
    description: 'প্রিমিয়াম মানের সিমেন্ট। নির্মাণ কাজের জন্য সর্বোত্তম গুণমান।'
  },
  {
    id: '13',
    name: 'সেভেন রিংস সিমেন্ট ২৫ কেজি',
    category: 'সেভেন রিংস সিমেন্ট',
    oldPrice: 350,
    price: 330,
    imageUrl: '/api/placeholder/300/300',
    stock: 200,
    description: 'ছোট নির্মাণ কাজের জন্য ২৫ কেজি সিমেন্ট।'
  },
  {
    id: '14',
    name: 'সেভেন রিংস হোয়াইট সিমেন্ট',
    category: 'সেভেন রিংস সিমেন্ট',
    oldPrice: 750,
    price: 720,
    imageUrl: '/api/placeholder/300/300',
    stock: 80,
    description: 'সাদা সিমেন্ট। ফিনিশিং এবং সৌন্দর্য বৃদ্ধির জন্য।'
  },
  {
    id: '15',
    name: 'সেভেন রিংস র‍্যাপিড সেট',
    category: 'সেভেন রিংস সিমেন্ট',
    oldPrice: 700,
    price: 680,
    imageUrl: '/api/placeholder/300/300',
    stock: 120,
    description: 'দ্রুত শুকানোর সিমেন্ট। জরুরি মেরামতের জন্য আদর্শ।'
  },
  {
    id: '16',
    name: 'সেভেন রিংস ওয়াটারপ্রুফ',
    category: 'সেভেন রিংস সিমেন্ট',
    oldPrice: 800,
    price: 750,
    imageUrl: '/api/placeholder/300/300',
    stock: 60,
    description: 'জলরোধী সিমেন্ট। বেসমেন্ট এবং বাথরুমের জন্য।'
  },

  // মোবাইল
  {
    id: '3',
    name: 'স্যামসাং গ্যালাক্সি A54',
    category: 'মোবাইল',
    oldPrice: 42000,
    price: 38500,
    imageUrl: '/api/placeholder/300/300',
    stock: 8,
    description: 'সর্বশেষ স্যামসাং গ্যালাক্সি মোবাইল ফোন। দারুণ ক্যামেরা এবং পারফরম্যান্স।'
  },
  {
    id: '17',
    name: 'আইফোন ১৪',
    category: 'মোবাইল',
    oldPrice: 85000,
    price: 78000,
    imageUrl: '/api/placeholder/300/300',
    stock: 5,
    description: 'অ্যাপলের সর্বশেষ আইফোন। প্রিমিয়াম বিল্ড কোয়ালিটি।'
  },
  {
    id: '18',
    name: 'রিয়েলমি C55',
    category: 'মোবাইল',
    oldPrice: 18000,
    price: 16500,
    imageUrl: '/api/placeholder/300/300',
    stock: 12,
    description: 'বাজেট ফ্রেন্ডলি মোবাইল। ভাল ব্যাটারি ব্যাকআপ।'
  },
  {
    id: '19',
    name: 'ওয়ান প্লাস নর্ড CE 3',
    category: 'মোবাইল',
    oldPrice: 35000,
    price: 32000,
    imageUrl: '/api/placeholder/300/300',
    stock: 7,
    description: 'দ্রুত চার্জিং এবং স্মুথ পারফরম্যান্স।'
  },
  {
    id: '20',
    name: 'শাওমি রেডমি নোট ১২',
    category: 'মোবাইল',
    oldPrice: 25000,
    price: 22500,
    imageUrl: '/api/placeholder/300/300',
    stock: 15,
    description: 'শাওমির জনপ্রিয় রেডমি সিরিজ। দুর্দান্ত ক্যামেরা।'
  },

  // ইলেকট্রনিক্স
  {
    id: '4',
    name: 'এলজি এসি ১.৫ টন',
    category: 'ইলেকট্রনিক্স',
    oldPrice: 65000,
    price: 58000,
    imageUrl: '/api/placeholder/300/300',
    stock: 3,
    description: 'শক্তি সাশ্রয়ী এয়ার কন্ডিশনার। দ্রুত শীতলতা এবং কম বিদ্যুৎ খরচ।'
  },
  {
    id: '21',
    name: 'স্যামসাং ফ্রিজ ২৫০ লিটার',
    category: 'ইলেকট্রনিক্স',
    oldPrice: 55000,
    price: 48000,
    imageUrl: '/api/placeholder/300/300',
    stock: 6,
    description: 'শক্তি সাশ্রয়ী রেফ্রিজারেটর। নো ফ্রস্ট টেকনোলজি।'
  },
  {
    id: '22',
    name: 'ওয়ালটন ওয়াশিং মেশিন',
    category: 'ইলেকট্রনিক্স',
    oldPrice: 35000,
    price: 32000,
    imageUrl: '/api/placeholder/300/300',
    stock: 4,
    description: '৭ কেজি ক্যাপাসিটি। অটোমেটিক ওয়াশিং।'
  },
  {
    id: '23',
    name: 'এলজি টিভি ৪৩ ইঞ্চি',
    category: 'ইলেকট্রনিক্স',
    oldPrice: 45000,
    price: 42000,
    imageUrl: '/api/placeholder/300/300',
    stock: 8,
    description: 'স্মার্ট এলইডি টিভি। ৪কে রেজোলিউশন।'
  },
  {
    id: '24',
    name: 'ডেস্ক ফ্যান ১৬ ইঞ্চি',
    category: 'ইলেকট্রনিক্স',
    oldPrice: 2500,
    price: 2200,
    imageUrl: '/api/placeholder/300/300',
    stock: 20,
    description: 'টেবিল ফ্যান। ৩ স্পিড কন্ট্রোল।'
  },

  // মোবিল
  {
    id: '5',
    name: 'কাস্ট্রল ইঞ্জিন অয়েল ৫ লিটার',
    category: 'মোবিল',
    oldPrice: 1200,
    price: 1050,
    imageUrl: '/api/placeholder/300/300',
    stock: 45,
    description: 'উন্নত মানের ইঞ্জিন অয়েল। গাড়ির ইঞ্জিনের দীর্ঘায়ু বৃদ্ধি করে।'
  },
  {
    id: '25',
    name: 'শেল হেলিক্স ১ লিটার',
    category: 'মোবিল',
    oldPrice: 280,
    price: 250,
    imageUrl: '/api/placeholder/300/300',
    stock: 80,
    description: 'প্রিমিয়াম ইঞ্জিন অয়েল। মোটরসাইকেলের জন্য।'
  },
  {
    id: '26',
    name: 'গিয়ার অয়েল ৫০০ মিলি',
    category: 'মোবিল',
    oldPrice: 180,
    price: 160,
    imageUrl: '/api/placeholder/300/300',
    stock: 100,
    description: 'গিয়ারবক্সের জন্য বিশেষ অয়েল।'
  },
  {
    id: '27',
    name: 'ব্রেক অয়েল ২৫০ মিলি',
    category: 'মোবিল',
    oldPrice: 120,
    price: 100,
    imageUrl: '/api/placeholder/300/300',
    stock: 150,
    description: 'ব্রেক সিস্টেমের জন্য হাইড্রোলিক অয়েল।'
  },
  {
    id: '28',
    name: 'পাওয়ার স্টিয়ারিং অয়েল',
    category: 'মোবিল',
    oldPrice: 200,
    price: 180,
    imageUrl: '/api/placeholder/300/300',
    stock: 60,
    description: 'পাওয়ার স্টিয়ারিং এর জন্য বিশেষ অয়েল।'
  },

  // পেট্রোল
  {
    id: '6',
    name: 'পেট্রোল ১ লিটার',
    category: 'পেট্রোল',
    price: 135,
    imageUrl: '/api/placeholder/300/300',
    stock: 200,
    description: 'খাঁটি পেট্রোল। মোটরসাইকেল এবং গেনারেটরের জন্য উপযুক্ত।'
  },
  {
    id: '29',
    name: 'অকটেন ১ লিটার',
    category: 'পেট্রোল',
    price: 140,
    imageUrl: '/api/placeholder/300/300',
    stock: 150,
    description: 'হাই অকটেন পেট্রোল। উন্নত পারফরম্যান্স।'
  },
  {
    id: '30',
    name: 'ডিজেল ১ লিটার',
    category: 'পেট্রোল',
    price: 115,
    imageUrl: '/api/placeholder/300/300',
    stock: 300,
    description: 'খাঁটি ডিজেল। জেনারেটর এবং ট্রাক্টরের জন্য।'
  },
  {
    id: '31',
    name: 'কেরোসিন ১ লিটার',
    category: 'পেট্রোল',
    price: 110,
    imageUrl: '/api/placeholder/300/300',
    stock: 100,
    description: 'পরিষ্কার কেরোসিন। রান্নার কাজে ব্যবহার।'
  },
  {
    id: '32',
    name: 'ইঞ্জিন ক্লিনার',
    category: 'পেট্রোল',
    oldPrice: 180,
    price: 160,
    imageUrl: '/api/placeholder/300/300',
    stock: 80,
    description: 'ইঞ্জিন পরিষ্কারের জন্য বিশেষ তরল।'
  },

  // স্যানেটারি
  {
    id: '33',
    name: 'কমোড সেট',
    category: 'স্যানেটারি',
    oldPrice: 8500,
    price: 7800,
    imageUrl: '/api/placeholder/300/300',
    stock: 12,
    description: 'সিরামিক কমোড। ফ্ল্যাশ ট্যাংক সহ।'
  },
  {
    id: '34',
    name: 'ওয়াশ বেসিন',
    category: 'স্যানেটারি',
    oldPrice: 3500,
    price: 3200,
    imageUrl: '/api/placeholder/300/300',
    stock: 25,
    description: 'সিরামিক ওয়াশ বেসিন। ট্যাপ সহ।'
  },
  {
    id: '35',
    name: 'শাওয়ার সেট',
    category: 'স্যানেটারি',
    oldPrice: 2500,
    price: 2200,
    imageUrl: '/api/placeholder/300/300',
    stock: 30,
    description: 'কমপ্লিট শাওয়ার সেট। হোস সহ।'
  },
  {
    id: '36',
    name: 'মিক্সার ট্যাপ',
    category: 'স্যানেটারি',
    oldPrice: 1800,
    price: 1650,
    imageUrl: '/api/placeholder/300/300',
    stock: 40,
    description: 'গরম ঠান্ডা পানির মিক্সার ট্যাপ।'
  },
  {
    id: '37',
    name: 'টয়লেট পেপার হোল্ডার',
    category: 'স্যানেটারি',
    oldPrice: 450,
    price: 400,
    imageUrl: '/api/placeholder/300/300',
    stock: 60,
    description: 'স্টেইনলেস স্টিল টয়লেট পেপার হোল্ডার।'
  },

  // পাইপ
  {
    id: '7',
    name: 'পিভিসি পাইপ ৪ ইঞ্চি',
    category: 'পাইপ',
    oldPrice: 850,
    price: 780,
    imageUrl: '/api/placeholder/300/300',
    stock: 75,
    description: 'মজবুত পিভিসি পাইপ। পানি সরবরাহ এবং নিষ্কাশনের জন্য আদর্শ।'
  },
  {
    id: '38',
    name: 'পিভিসি পাইপ ২ ইঞ্চি',
    category: 'পাইপ',
    oldPrice: 450,
    price: 420,
    imageUrl: '/api/placeholder/300/300',
    stock: 100,
    description: '২ ইঞ্চি পিভিসি পাইপ। ছোট পানির লাইনের জন্য।'
  },
  {
    id: '39',
    name: 'গ্যালভানাইজড পাইপ ১ ইঞ্চি',
    category: 'পাইপ',
    oldPrice: 350,
    price: 320,
    imageUrl: '/api/placeholder/300/300',
    stock: 80,
    description: 'মেটাল পাইপ। দীর্ঘস্থায়ী এবং শক্তিশালী।'
  },
  {
    id: '40',
    name: 'ফ্লেক্সিবল হোস ১০ ফুট',
    category: 'পাইপ',
    oldPrice: 280,
    price: 250,
    imageUrl: '/api/placeholder/300/300',
    stock: 120,
    description: 'নমনীয় পানির হোস। বাগানের জন্য আদর্শ।'
  },
  {
    id: '41',
    name: 'পাইপ ফিটিংস সেট',
    category: 'পাইপ',
    oldPrice: 650,
    price: 580,
    imageUrl: '/api/placeholder/300/300',
    stock: 90,
    description: 'পাইপ জোড়ার জন্য বিভিন্ন ফিটিংস।'
  },

  // বিয়ারিং
  {
    id: '42',
    name: 'স্কেট বিয়ারিং 6205',
    category: 'বিয়ারিং',
    oldPrice: 180,
    price: 160,
    imageUrl: '/api/placeholder/300/300',
    stock: 50,
    description: 'উন্নত মানের স্কেট বিয়ারিং। মেশিনারির জন্য।'
  },
  {
    id: '43',
    name: 'বল বিয়ারিং 6206',
    category: 'বিয়ারিং',
    oldPrice: 220,
    price: 200,
    imageUrl: '/api/placeholder/300/300',
    stock: 40,
    description: 'ভারী মেশিনের জন্য বল বিয়ারিং।'
  },
  {
    id: '44',
    name: 'থ্রাস্ট বিয়ারিং',
    category: 'বিয়ারিং',
    oldPrice: 350,
    price: 320,
    imageUrl: '/api/placeholder/300/300',
    stock: 30,
    description: 'থ্রাস্ট লোড সহ্য করার জন্য বিশেষ বিয়ারিং।'
  },
  {
    id: '45',
    name: 'নিডল বিয়ারিং',
    category: 'বিয়ারিং',
    oldPrice: 280,
    price: 250,
    imageUrl: '/api/placeholder/300/300',
    stock: 35,
    description: 'কম স্থানের জন্য নিডল বিয়ারিং।'
  },
  {
    id: '46',
    name: 'পিলো ব্লক বিয়ারিং',
    category: 'বিয়ারিং',
    oldPrice: 450,
    price: 420,
    imageUrl: '/api/placeholder/300/300',
    stock: 25,
    description: 'শ্যাফট সাপোর্টের জন্য পিলো ব্লক।'
  },

  // রং
  {
    id: '47',
    name: 'এশিয়ান পেইন্ট ১ লিটার',
    category: 'রং',
    oldPrice: 650,
    price: 580,
    imageUrl: '/api/placeholder/300/300',
    stock: 60,
    description: 'প্রিমিয়াম ওয়াল পেইন্ট। দীর্ঘস্থায়ী রং।'
  },
  {
    id: '48',
    name: 'প্রাইমার ১ লিটার',
    category: 'রং',
    oldPrice: 380,
    price: 350,
    imageUrl: '/api/placeholder/300/300',
    stock: 80,
    description: 'দেয়ালের জন্য আন্ডার কোট প্রাইমার।'
  },
  {
    id: '49',
    name: 'ইনামেল পেইন্ট ৫০০ মিলি',
    category: 'রং',
    oldPrice: 280,
    price: 250,
    imageUrl: '/api/placeholder/300/300',
    stock: 100,
    description: 'মেটালের জন্য ইনামেল পেইন্ট।'
  },
  {
    id: '50',
    name: 'ব্রাশ সেট',
    category: 'রং',
    oldPrice: 350,
    price: 320,
    imageUrl: '/api/placeholder/300/300',
    stock: 50,
    description: 'বিভিন্ন সাইজের পেইন্ট ব্রাশ।'
  },
  {
    id: '51',
    name: 'রোলার ব্রাশ',
    category: 'রং',
    oldPrice: 180,
    price: 160,
    imageUrl: '/api/placeholder/300/300',
    stock: 70,
    description: 'দ্রুত রং করার জন্য রোলার ব্রাশ।'
  },

  // বিদ্যুৎ
  {
    id: '52',
    name: 'সুইচ বোর্ড ৬ গ্যাং',
    category: 'বিদ্যুৎ',
    oldPrice: 450,
    price: 420,
    imageUrl: '/api/placeholder/300/300',
    stock: 40,
    description: '৬ গ্যাং সুইচ বোর্ড। প্রিমিয়াম কোয়ালিটি।'
  },
  {
    id: '53',
    name: 'সকেট ৩ পিন',
    category: 'বিদ্যুৎ',
    oldPrice: 180,
    price: 160,
    imageUrl: '/api/placeholder/300/300',
    stock: 80,
    description: '৩ পিন পাওয়ার সকেট। নিরাপদ।'
  },
  {
    id: '54',
    name: 'এমসিবি ৩২ অ্যাম্প',
    category: 'বিদ্যুৎ',
    oldPrice: 350,
    price: 320,
    imageUrl: '/api/placeholder/300/300',
    stock: 60,
    description: 'মিনিয়েচার সার্কিট ব্রেকার।'
  },
  {
    id: '55',
    name: 'এক্সটেনশন বোর্ড',
    category: 'বিদ্যুৎ',
    oldPrice: 280,
    price: 250,
    imageUrl: '/api/placeholder/300/300',
    stock: 45,
    description: '৪ সকেট এক্সটেনশন বোর্ড।'
  },
  {
    id: '56',
    name: 'ভোল্টেজ স্ট্যাবিলাইজার',
    category: 'বিদ্যুৎ',
    oldPrice: 2500,
    price: 2200,
    imageUrl: '/api/placeholder/300/300',
    stock: 20,
    description: 'বৈদ্যুতিক সরঞ্জাম সুরক্ষার জন্য।'
  },

  // ফ্যান
  {
    id: '8',
    name: 'সিলিং ফ্যান ৪৮ ইঞ্চি',
    category: 'ফ্যান',
    oldPrice: 3500,
    price: 3200,
    imageUrl: '/api/placeholder/300/300',
    stock: 12,
    description: 'শক্তিশালী সিলিং ফ্যান। কম শব্দ এবং বেশি বাতাস।'
  },
  {
    id: '57',
    name: 'ওয়াল ফ্যান ১৬ ইঞ্চি',
    category: 'ফ্যান',
    oldPrice: 2200,
    price: 2000,
    imageUrl: '/api/placeholder/300/300',
    stock: 18,
    description: 'দেয়ালে লাগানোর ফ্যান। রিমোট কন্ট্রোল।'
  },
  {
    id: '58',
    name: 'এক্সহস্ট ফ্যান ১০ ইঞ্চি',
    category: 'ফ্যান',
    oldPrice: 1500,
    price: 1350,
    imageUrl: '/api/placeholder/300/300',
    stock: 25,
    description: 'বাথরুম এবং রান্নাঘরের জন্য।'
  },
  {
    id: '59',
    name: 'স্ট্যান্ড ফ্যান ১৮ ইঞ্চি',
    category: 'ফ্যান',
    oldPrice: 3800,
    price: 3500,
    imageUrl: '/api/placeholder/300/300',
    stock: 10,
    description: 'পোর্টেবল স্ট্যান্ড ফ্যান। টাইমার সহ।'
  },
  {
    id: '60',
    name: 'ব্র্যাকেটলেস ফ্যান ৫২ ইঞ্চি',
    category: 'ফ্যান',
    oldPrice: 4200,
    price: 3800,
    imageUrl: '/api/placeholder/300/300',
    stock: 8,
    description: 'আধুনিক ডিজাইনের ব্র্যাকেটলেস ফ্যান।'
  },

  // লাইট
  {
    id: '61',
    name: 'এলইডি বাল্ব ১৫ ওয়াট',
    category: 'লাইট',
    oldPrice: 280,
    price: 250,
    imageUrl: '/api/placeholder/300/300',
    stock: 100,
    description: 'শক্তি সাশ্রয়ী এলইডি বাল্ব।'
  },
  {
    id: '62',
    name: 'টিউব লাইট ৪০ ওয়াট',
    category: 'লাইট',
    oldPrice: 450,
    price: 420,
    imageUrl: '/api/placeholder/300/300',
    stock: 60,
    description: 'ব্রাইট হোয়াইট টিউব লাইট।'
  },
  {
    id: '63',
    name: 'চ্যান্ডেলিয়ার ৫ লাইট',
    category: 'লাইট',
    oldPrice: 3500,
    price: 3200,
    imageUrl: '/api/placeholder/300/300',
    stock: 15,
    description: 'আকর্ষণীয় ক্রিস্টাল চ্যান্ডেলিয়ার।'
  },
  {
    id: '64',
    name: 'ইমার্জেন্সি লাইট',
    category: 'লাইট',
    oldPrice: 1200,
    price: 1080,
    imageUrl: '/api/placeholder/300/300',
    stock: 30,
    description: 'রিচার্জেবল ইমার্জেন্সি লাইট।'
  },
  {
    id: '65',
    name: 'স্ট্রিট লাইট ৫০ ওয়াট',
    category: 'লাইট',
    oldPrice: 2800,
    price: 2500,
    imageUrl: '/api/placeholder/300/300',
    stock: 20,
    description: 'রাস্তার জন্য সোলার স্ট্রিট লাইট।'
  },

  // তার
  {
    id: '66',
    name: 'ইলেকট্রিক তার ২.৫ এমএম',
    category: 'তার',
    oldPrice: 350,
    price: 320,
    imageUrl: '/api/placeholder/300/300',
    stock: 200,
    description: 'কপার ইলেকট্রিক ওয়্যার। ১০০ মিটার।'
  },
  {
    id: '67',
    name: 'কো-এক্সিয়াল কেবল',
    category: 'তার',
    oldPrice: 280,
    price: 250,
    imageUrl: '/api/placeholder/300/300',
    stock: 150,
    description: 'টিভি এবং ইন্টারনেটের জন্য।'
  },
  {
    id: '68',
    name: 'ইউএসবি কেবল টাইপ-সি',
    category: 'তার',
    oldPrice: 180,
    price: 160,
    imageUrl: '/api/placeholder/300/300',
    stock: 120,
    description: 'ফাস্ট চার্জিং ইউএসবি কেবল।'
  },
  {
    id: '69',
    name: 'পাওয়ার কেবল ৩ কোর',
    category: 'তার',
    oldPrice: 450,
    price: 420,
    imageUrl: '/api/placeholder/300/300',
    stock: 80,
    description: 'ভারী যন্ত্রের জন্য পাওয়ার কেবল।'
  },
  {
    id: '70',
    name: 'নেটওয়ার্ক কেবল CAT6',
    category: 'তার',
    oldPrice: 320,
    price: 290,
    imageUrl: '/api/placeholder/300/300',
    stock: 100,
    description: 'হাই স্পিড ইন্টারনেটের জন্য।'
  },

  // আরও অন্যান্য
  {
    id: '71',
    name: 'হ্যামার ৫০০ গ্রাম',
    category: 'আরও অন্যান্য',
    oldPrice: 350,
    price: 320,
    imageUrl: '/api/placeholder/300/300',
    stock: 40,
    description: 'নির্মাণ কাজের জন্য হাতুড়ি।'
  },
  {
    id: '72',
    name: 'স্ক্রু ড্রাইভার সেট',
    category: 'আরও অন্যান্য',
    oldPrice: 280,
    price: 250,
    imageUrl: '/api/placeholder/300/300',
    stock: 60,
    description: 'বিভিন্ন সাইজের স্ক্রু ড্রাইভার।'
  },
  {
    id: '73',
    name: 'মেজারিং টেপ ৫ মিটার',
    category: 'আরও অন্যান্য',
    oldPrice: 180,
    price: 160,
    imageUrl: '/api/placeholder/300/300',
    stock: 80,
    description: 'স্টিল মেজারিং টেপ।'
  },
  {
    id: '74',
    name: 'লেভেল মেশিন ২ ফুট',
    category: 'আরও অন্যান্য',
    oldPrice: 450,
    price: 420,
    imageUrl: '/api/placeholder/300/300',
    stock: 35,
    description: 'নির্মাণ কাজের জন্য স্পিরিট লেভেল।'
  },
  {
    id: '75',
    name: 'হ্যান্ড গ্লোভস',
    category: 'আরও অন্যান্য',
    oldPrice: 120,
    price: 100,
    imageUrl: '/api/placeholder/300/300',
    stock: 100,
    description: 'কাজের জন্য সুরক্ষা গ্লোভস।'
  }
];