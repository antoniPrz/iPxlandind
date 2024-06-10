import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import macbookImage from './assets/macbook.jpg';
import iphone7Image from './assets/iphone7.jpg';
import iphonexrImage from './assets/iphonexr.jpg';
import ps4Image from './assets/ps4.jpg';
import iphonexImage from './assets/iphonex.jpg';
import iphone8Image from './assets/iphone8.jpg';
import iphone13proMaxImage from './assets/iphone13promax.jpg';
import appleWatchImage from './assets/applewatch.jpg';

const products = [
  {
    image: macbookImage,
    title: 'MacBook Pro A1278 13" i5 4GB RAM',
    price: '$239.990',
    tag: 'CYBER WEEK'
  },
  {
    image: iphone7Image,
    title: 'iPhone 7',
    price: '$139.990',
    tag: 'CYBER WEEK'
  },
  {
    image: iphonexrImage,
    title: 'iPhone XR',
    price: '$229.990',
    tag: 'CYBER WEEK'
  },
  {
    image: ps4Image,
    title: 'Playstation 4 - 500GB con control',
    price: '$169.990',
    tag: 'CYBER WEEK'
  },
  {
    image: iphonexImage,
    title: 'iPhone X',
    price: '$229.990',
    tag: 'CYBER WEEK'
  },
  {
    image: iphone8Image,
    title: 'iPhone 8',
    price: '$159.990',
    tag: 'CYBER WEEK'
  },
  {
    image: iphone13proMaxImage,
    title: 'iPhone 13 Pro Max',
    price: '$799.990',
    tag: 'CYBER WEEK'
  },
  {
    image: appleWatchImage,
    title: 'Apple Watch Serie 6',
    price: '$249.990',
    tag: 'CYBER WEEK'
  },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <header className="bg-white dark:bg-dark-secondary shadow">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-primary-purple dark:text-dark-text mb-4 md:mb-0">iPhoneXtreme</h1>
          <nav className="space-x-4">
            <a href="#" className="text-primary-purple dark:text-dark-text hover:text-primary-pink dark:hover:text-primary-pink">Home</a>
            <a href="#" className="text-primary-purple dark:text-dark-text hover:text-primary-pink dark:hover:text-primary-pink">Productos</a>
            <a href="#" className="text-primary-purple dark:text-dark-text hover:text-primary-pink dark:hover:text-primary-pink">Ofertas</a>
            <a href="#" className="text-primary-purple dark:text-dark-text hover:text-primary-pink dark:hover:text-primary-pink">Contacto</a>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 bg-primary-pink text-white dark:bg-primary-purple px-4 py-2 rounded hover:bg-primary-purple dark:hover:bg-primary-pink"
          >
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <section className="hero-section bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary-purple dark:text-dark-text">Descubre lo Último en Tecnología</h2>
          <p className="text-gray-700 dark:text-dark-text mb-4">iPhones y MacBooks a los Mejores Precios</p>
          <button className="bg-primary-pink text-white dark:bg-primary-purple px-4 py-2 rounded hover:bg-primary-purple dark:hover:bg-primary-pink">Comprar Ahora</button>
        </section>
        <section className="products-section mt-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-purple dark:text-dark-text">Nuestros Productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard 
                key={index} 
                image={product.image} 
                title={product.title} 
                price={product.price} 
                tag={product.tag} 
              />
            ))}
          </div>
        </section>
        <section className="offers-section mt-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-purple dark:text-dark-text">Ofertas del Mes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Aquí van las ofertas */}
          </div>
        </section>
        <section className="testimonials-section mt-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-purple dark:text-dark-text">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Aquí van los testimonios */}
          </div>
        </section>
        <section className="newsletter-section mt-8 bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary-purple dark:text-dark-text">Suscríbete a Nuestro Boletín</h2>
          <form className="flex flex-col items-center">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="border p-2 w-full sm:w-2/3 md:w-1/2 rounded mb-4 dark:bg-dark-highlight dark:text-dark-text" 
            />
            <button className="bg-primary-pink text-white dark:bg-primary-purple px-4 py-2 rounded w-full sm:w-2/3 md:w-1/2 hover:bg-primary-purple dark:hover:bg-primary-pink">Suscribirse</button>
          </form>
        </section>
      </main>
      <footer className="bg-white dark:bg-dark-secondary shadow mt-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-gray-700 dark:text-dark-text">&copy; 2024 iPhonextreme. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
