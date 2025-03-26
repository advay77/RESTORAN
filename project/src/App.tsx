import React, { useState } from 'react';
import { 
  Utensils, Menu, X, ChefHat, Clock, Star, 
  Coffee, Wine, Pizza, Fish, MapPin, Phone,
  Facebook, Twitter, Instagram, Youtube, Mail
} from 'lucide-react';
import BookingModal from './components/BookingModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const menuItems = [
    {
      category: "Main Course",
      items: [
        { name: "Grilled Ribeye Steak", price: "$32", description: "Premium cut with herb butter" },
        { name: "Salmon Fillet", price: "$28", description: "Fresh Atlantic salmon with lemon sauce" },
        { name: "Chicken Marsala", price: "$24", description: "Classic Italian preparation" }
      ]
    },
    {
      category: "Appetizers",
      items: [
        { name: "Bruschetta", price: "$12", description: "Toasted bread with tomatoes and herbs" },
        { name: "Calamari", price: "$15", description: "Crispy fried with marinara sauce" },
        { name: "Caesar Salad", price: "$10", description: "Classic preparation with anchovies" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Navigation */}
      <nav className="bg-[#0f172a] fixed w-full z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Utensils className="h-8 w-8 text-[#ffa41b]" />
              <span className="ml-2 text-3xl font-bold text-[#ffa41b]">Restoran</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-[#ffa41b] font-semibold">HOME</a>
              <a href="#about" className="text-white hover:text-[#ffa41b]">ABOUT</a>
              <a href="#service" className="text-white hover:text-[#ffa41b]">SERVICE</a>
              <a href="#menu" className="text-white hover:text-[#ffa41b]">MENU</a>
              <a href="#contact" className="text-white hover:text-[#ffa41b]">CONTACT</a>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#ffa41b] text-white px-8 py-2 font-semibold hover:bg-[#ff8c00]"
              >
                BOOK A TABLE
              </button>
            </div>
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#0f172a] border-t border-gray-800">
            <div className="px-4 py-2 space-y-3">
              <a href="#home" className="block text-[#ffa41b] font-semibold py-2">HOME</a>
              <a href="#about" className="block text-white hover:text-[#ffa41b] py-2">ABOUT</a>
              <a href="#service" className="block text-white hover:text-[#ffa41b] py-2">SERVICE</a>
              <a href="#menu" className="block text-white hover:text-[#ffa41b] py-2">MENU</a>
              <a href="#contact" className="block text-white hover:text-[#ffa41b] py-2">CONTACT</a>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="w-full bg-[#ffa41b] text-white px-8 py-2 font-semibold hover:bg-[#ff8c00]"
              >
                BOOK A TABLE
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative min-h-screen pt-20">
        <div className="hero-overlay absolute inset-0 z-10" />
        <div className="max-w-7xl mx-auto px-4 min-h-[calc(100vh-5rem)] flex items-center relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                Enjoy Our<br />
                Delicious Meal
              </h1>
              <p className="text-base lg:text-lg mb-8 lg:mb-12 text-gray-300 max-w-xl mx-auto lg:mx-0">
                Experience the finest selection of grilled meats and seafood, prepared with passion and expertise by our master chefs. Every dish tells a story of flavor and tradition.
              </p>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#ffa41b] text-white px-8 lg:px-10 py-3 lg:py-4 text-lg font-semibold hover:bg-[#ff8c00]"
              >
                BOOK A TABLE
              </button>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="plate-container w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Grilled meat platter"
                  className="rotate-plate rounded-full w-full h-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over 20 years of culinary excellence, we bring you the finest dining experience with our passionate team of expert chefs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <ChefHat className="w-12 h-12 text-[#ffa41b] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Master Chefs</h3>
              <p className="text-gray-600">Expert culinary team with international experience</p>
            </div>
            <div className="text-center p-6">
              <Star className="w-12 h-12 text-[#ffa41b] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Food</h3>
              <p className="text-gray-600">Fresh ingredients sourced from local suppliers</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-[#ffa41b] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Always available to serve you better</p>
            </div>
            <div className="text-center p-6">
              <Coffee className="w-12 h-12 text-[#ffa41b] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Coffee & Drinks</h3>
              <p className="text-gray-600">Wide selection of beverages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a variety of services to make your dining experience memorable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Wine className="w-12 h-12 text-[#ffa41b] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
              <p className="text-gray-600">Experience luxury dining with our premium menu selections</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Pizza className="w-12 h-12 text-[#ffa41b] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Catering Service</h3>
              <p className="text-gray-600">Professional catering for all your special events</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Fish className="w-12 h-12 text-[#ffa41b] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Private Events</h3>
              <p className="text-gray-600">Custom menus and service for private gatherings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated menu featuring the finest ingredients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((category, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{category.category}</h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <span className="text-[#ffa41b] font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for reservations or inquiries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#ffa41b] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600">28/22 Beli Road New Katra, Prayagraj</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-[#ffa41b] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
              <p className="text-gray-600">+91 6386771480</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-[#ffa41b] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <p className="text-gray-600">advayanand87@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Utensils className="h-8 w-8 text-[#ffa41b]" />
                <span className="ml-2 text-2xl font-bold text-[#ffa41b]">Restoran</span>
              </div>
              <p className="text-gray-400">
                Experience the art of fine dining with our exceptional cuisine and service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
              <p className="text-gray-400">Monday - Friday</p>
              <p className="text-white mb-2">09:00 AM - 09:00 PM</p>
              <p className="text-gray-400">Saturday - Sunday</p>
              <p className="text-white">10:00 AM - 08:00 PM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#service" className="text-gray-400 hover:text-white">Our Services</a></li>
                <li><a href="#menu" className="text-gray-400 hover:text-white">Our Menu</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#ffa41b]">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#ffa41b]">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#ffa41b]">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#ffa41b]">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Restoran. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;
