
import Navbar from '../organisms/Navbar';
import HeroSection from '../molecules/HeroSection';
import ProductGrid from '../organisms/ProductGrid';

import NewsletterSection from '../organisms/NewsletterSection';
import ServiceSection from '../organisms/ServiceSection';
import LocationSection from '../organisms/LocationSection';

// eslint-disable-next-line react/prop-types
const HomePage = ({ darkMode, toggleTheme, products }) => (
  <div className="min-h-screen bg-white dark:bg-dark-bg">
    <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
    <main className="container mx-auto px-4 py-6">
      <HeroSection />
      <ProductGrid products={products} />
      <ServiceSection />
     <LocationSection/>
      <NewsletterSection />
    </main>
    <footer className="bg-white dark:bg-dark-secondary shadow mt-8">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-gray-700 dark:text-dark-text">&copy; 2024 iPhoneXtreme. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
);

export default HomePage;
