import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import TopNavigation from '@/components/TopNavigation';
import BottomNavigation from '@/components/BottomNavigation';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const Search = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const [sortBy, setSortBy] = useState('name');
  
  const [cart, setCart] = useLocalStorage<string[]>('cart', []);
  const [wishlist, setWishlist] = useLocalStorage<string[]>('wishlist', []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    
    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const handleAddToCart = (productId: string) => {
    setCart(prev => [...prev, productId]);
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNavigation cartCount={cart.length} wishlistCount={wishlist.length} />
      
      <main className="p-4 space-y-4">
        {/* Search Bar */}
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="পণ্য খুঁজুন..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border border-border rounded-md bg-card"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center space-x-2"
          >
            <Filter size={16} />
            <span>ফিল্টার</span>
          </button>
        </div>

        {/* Filters Panel - Always Open */}
        <div className="bg-card border border-border rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">ফিল্টার</h3>
          </div>
          
          {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">ক্যাটাগরি</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-card"
              >
                <option value="">সকল ক্যাটাগরি</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium mb-2">দাম পরিসর</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="সর্বনিম্ন"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                  className="flex-1 px-3 py-2 border border-border rounded-md bg-card"
                />
                <input
                  type="number"
                  placeholder="সর্বোচ্চ"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                  className="flex-1 px-3 py-2 border border-border rounded-md bg-card"
                />
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium mb-2">সাজানো</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-card"
              >
                <option value="name">নাম অনুযায়ী</option>
                <option value="price-low">দাম: কম থেকে বেশি</option>
                <option value="price-high">দাম: বেশি থেকে কম</option>
              </select>
            </div>
        </div>

        {/* Results */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {filteredProducts.length} টি পণ্য পাওয়া গেছে
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                isInWishlist={wishlist.includes(product.id)}
              />
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">কোন পণ্য পাওয়া যায়নি</p>
          </div>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Search;