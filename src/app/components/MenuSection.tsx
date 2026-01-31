import React, { useState } from 'react';
import { Leaf, Sparkles, Search } from 'lucide-react';

interface MenuItem {
  name: string;
  price: number;
  popular?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'soups',
    name: 'Soups',
    emoji: '🥣',
    items: [
      { name: 'Cream of Tomato Soup', price: 110 },
      { name: 'Cream of Palak Soup', price: 120 },
      { name: 'Sweet Corn Veg Soup', price: 120, popular: true },
      { name: 'Veg Soup', price: 125 },
      { name: 'Veg Clear Soup', price: 90 },
      { name: 'Veg Noodles Soup', price: 110 },
      { name: 'Veg Hot & Sour Soup', price: 130, popular: true },
      { name: 'Veg Manchow Soup', price: 135, popular: true },
      { name: 'Lemon Coriander Soup', price: 110 },
    ],
  },
  {
    id: 'starters',
    name: 'Starters',
    emoji: '🍢',
    items: [
      { name: 'Hara Bhara Kebab Dry', price: 240, popular: true },
      { name: 'Hariyali Kebab', price: 230 },
      { name: 'Paneer Tikka Dry', price: 250, popular: true },
      { name: 'Mushroom Tikka Dry', price: 250 },
      { name: 'Methi Kebab', price: 200 },
      { name: 'Aloo Tikka', price: 210 },
    ],
  },
  {
    id: 'maincourse',
    name: 'Main Course',
    emoji: '🍛',
    items: [
      { name: 'Jeera Aloo Dry', price: 125 },
      { name: 'Veg Maharashtrian Tadka', price: 275, popular: true },
      { name: 'Veg Kolhapuri Tadka', price: 265 },
      { name: 'Paneer Maratha', price: 270 },
      { name: 'Veg Tiranga', price: 290 },
      { name: 'Veg Hungama', price: 275 },
      { name: 'Veg Mumtaz', price: 230 },
      { name: 'Veg Chilli Milli', price: 225 },
      { name: 'Veg Tawa Masala', price: 245 },
      { name: 'Veg Malwani', price: 240 },
      { name: 'Veg Maharaja', price: 265 },
      { name: 'Veg Dilkhush', price: 260 },
      { name: 'Veg Patiala', price: 260 },
      { name: 'Kaju Makhanwala', price: 255, popular: true },
      { name: 'Kaju Khoya', price: 255 },
      { name: 'Kaju Curry', price: 255 },
      { name: 'Kaju Masala', price: 255 },
      { name: 'Kaju Koliwada', price: 255 },
      { name: 'Paneer Lehsuni', price: 240 },
      { name: 'Paneer Koliwada', price: 250 },
      { name: 'Paneer Roli Curry', price: 250 },
      { name: 'Paneer Pasanda', price: 260 },
      { name: 'Paneer Baby Corn Mushroom Masala', price: 265 },
      { name: 'Cheese Paneer Masala', price: 270 },
      { name: 'Veg Makhanwala', price: 215 },
      { name: 'Veg Kolhapuri', price: 195 },
      { name: 'Veg Bhuna Masala', price: 215 },
      { name: 'Veg Jalfrezi', price: 205 },
      { name: 'Veg Jaipuri', price: 205 },
      { name: 'Veg Hyderabadi', price: 215 },
      { name: 'Paneer Kolhapuri', price: 235 },
      { name: 'Paneer Matar', price: 210 },
      { name: 'Paneer Masala', price: 230 },
      { name: 'Paneer Makhanwala', price: 230, popular: true },
      { name: 'Paneer Tikka Masala', price: 240, popular: true },
      { name: 'Paneer Palak', price: 215 },
      { name: 'Paneer Chana', price: 210 },
      { name: 'Paneer Bhurji', price: 260 },
      { name: 'Paneer Baby Corn Masala', price: 240 },
      { name: 'Paneer Tawa', price: 250 },
      { name: 'Aloo Palak', price: 170 },
      { name: 'Aloo Methi', price: 170 },
      { name: 'Aloo Matar', price: 180 },
      { name: 'Mushroom Masala', price: 230 },
      { name: 'Mushroom Matar', price: 235 },
      { name: 'Mushroom Tikka Masala', price: 250 },
      { name: 'Chana Masala', price: 185 },
      { name: 'Bhindi Fry', price: 190 },
      { name: 'Sev Bhaji', price: 205 },
      { name: 'Bhindi Masala', price: 185 },
      { name: 'Baby Corn Masala', price: 215 },
      { name: 'Palak Matar', price: 190 },
      { name: 'Gobhi Makhanwala', price: 190 },
      { name: 'Soyabean Keema', price: 200 },
      { name: 'Soyabean Paneer Keema', price: 215 },
      { name: 'Soyabean Masala', price: 200 },
      { name: 'Stuffed Tomato', price: 200 },
      { name: 'Stuffed Capsicum', price: 200 },
      { name: 'Mushroom Tawa Masala', price: 255 },
      { name: 'Lehsuni Methi', price: 195 },
      { name: 'Mix Vegetable', price: 190 },
      { name: 'Malai Methi Matar', price: 220 },
      { name: 'Veg Kadhai', price: 220 },
      { name: 'Veg Handi', price: 220 },
      { name: 'Paneer Kadhai', price: 250, popular: true },
      { name: 'Palak Kadhai', price: 185 },
      { name: 'Palak Handi', price: 190 },
      { name: 'Mushroom Kadhai', price: 250 },
      { name: 'Mushroom Handi', price: 250 },
      { name: 'Baby Corn Mushroom Paneer Kadhai', price: 260 },
      { name: 'Family Kadhai', price: 310, popular: true },
      { name: 'Family Handi', price: 310, popular: true },
      { name: 'Veg Kofta', price: 210 },
      { name: 'Paneer Kofta', price: 250 },
      { name: 'Malai Kofta', price: 250, popular: true },
      { name: 'Nargisi Kofta', price: 260 },
      { name: 'Banjara Kofta', price: 270 },
      { name: 'Veg Korma', price: 210 },
      { name: 'Paneer Korma', price: 240 },
      { name: 'Plain Dal', price: 95 },
      { name: 'Dal Fry', price: 140 },
      { name: 'Dal Tadka', price: 150, popular: true },
      { name: 'Butter Dal Fry', price: 160 },
      { name: 'Dal Kolhapuri', price: 145 },
      { name: 'Dal Palak', price: 140 },
      { name: 'Navratan Korma', price: 235 },
      { name: 'Green Peas Masala', price: 190 },
    ],
  },
  {
    id: 'breads',
    name: 'Breads',
    emoji: '🍞',
    items: [
      { name: 'Roti', price: 24 },
      { name: 'Butter Roti', price: 35 },
      { name: 'Paratha', price: 42 },
      { name: 'Butter Paratha', price: 42 },
      { name: 'Naan', price: 42 },
      { name: 'Butter Naan', price: 50 },
      { name: 'Garlic Naan', price: 80, popular: true },
      { name: 'Butter Garlic Naan', price: 100, popular: true },
      { name: 'Cheese Naan', price: 110 },
      { name: 'Stuffed Paratha', price: 130 },
      { name: 'Aloo Paratha', price: 110 },
      { name: 'Onion Stuffed Paratha', price: 120 },
      { name: 'Bhatura', price: 48 },
      { name: 'Roti ki Tokri (8 Variants)', price: 360, popular: true },
      { name: 'Kulcha', price: 38 },
      { name: 'Butter Kulcha', price: 48 },
    ],
  },
  {
    id: 'rice',
    name: 'Rice & Biryani',
    emoji: '🍚',
    items: [
      { name: 'Steamed Rice', price: 80 },
      { name: 'Jeera Rice', price: 135 },
      { name: 'Curd Rice', price: 180 },
      { name: 'Ghee Rice', price: 190 },
      { name: 'Kashmiri Pulao', price: 200 },
      { name: 'Veg Pulao', price: 205 },
      { name: 'Paneer Pulao', price: 220 },
      { name: 'Dal Khichdi', price: 205 },
      { name: 'Tadka Dal Khichdi', price: 220 },
      { name: 'Tawa Rice', price: 200 },
      { name: 'Hyderabadi Biryani', price: 205, popular: true },
      { name: 'Palak Biryani', price: 190 },
      { name: 'Handi Biryani', price: 250 },
      { name: 'Veg Biryani', price: 210, popular: true },
      { name: 'Special Veg Biryani', price: 245 },
      { name: 'Special Dum Biryani', price: 260, popular: true },
      { name: 'Paneer Tikka Biryani', price: 270 },
      { name: 'Mushroom Tikka Biryani', price: 270 },
    ],
  },
];

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('soups');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getCurrentCategory = () => {
    return menuData.find(cat => cat.id === activeCategory);
  };

  const filteredItems = getCurrentCategory()?.items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-muted to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-secondary font-medium uppercase tracking-wider text-sm">Our Menu</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Explore Our Delicious Offerings
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Pure vegetarian dishes crafted with authentic Indian flavors and fresh ingredients
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full">
            <Leaf className="w-5 h-5 text-secondary" />
            <span className="text-foreground font-medium">100% Pure Vegetarian</span>
          </div>
        </div>

        {/* Category Navigation - Sticky on Mobile */}
        <div className="sticky top-20 z-40 bg-gradient-to-b from-muted to-white pb-6 mb-6">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 min-w-max md:min-w-0 md:flex-wrap md:justify-center pb-2">
              {menuData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all shadow-md ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105'
                      : 'bg-white text-foreground hover:bg-primary/10 hover:scale-105'
                  }`}
                >
                  <span className="text-xl">{category.emoji}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/10">
          {/* Category Header with Search */}
          <div className="bg-gradient-to-r from-primary to-accent p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl md:text-5xl">{getCurrentCategory()?.emoji}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                    {getCurrentCategory()?.name}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base mt-1">
                    {filteredItems.length} items available
                  </p>
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border-2 border-white/30 focus:border-white focus:outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="p-6 md:p-8">
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative flex items-center justify-between p-5 rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:shadow-lg"
                  >
                    {/* Item Details */}
                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-secondary/10 p-2 rounded-lg group-hover:bg-secondary/20 transition-colors">
                        <Leaf className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2 mb-1">
                          <h4 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                            {item.name}
                          </h4>
                        </div>
                        {item.popular && (
                          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-accent to-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                            <Sparkles className="w-3 h-3" />
                            Popular Choice
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right ml-4 flex-shrink-0">
                      <div className="bg-gradient-to-br from-primary to-accent text-white px-4 py-2 rounded-full shadow-md">
                        <p className="text-lg md:text-xl font-bold">
                          ₹{item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No dishes found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* QR Code Info */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border-2 border-primary/20">
            <div className="flex items-center gap-4">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm11 0h2v2h-2v-2zm-3 0h2v4h-2v-4zm5 0h2v4h-2v-4zm-2 4h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">Digital Menu Available</h4>
                <p className="text-muted-foreground text-sm">Scan our QR code to view this menu on your phone</p>
              </div>
            </div>
          </div>

          {/* Special Note */}
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border-2 border-secondary/20">
            <div className="flex items-center gap-4">
              <Leaf className="w-12 h-12 text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">Fresh & Hygienic</h4>
                <p className="text-muted-foreground text-sm">All dishes prepared with fresh ingredients in our clean kitchen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};