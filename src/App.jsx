// eslint-disable-next-line no-unused-vars
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">IXLanding</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <section className="hero-section bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Descubre lo Último en Tecnología</h2>
          <p className="text-gray-700 mb-4">iPhones y MacBooks a los Mejores Precios</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Comprar Ahora</button>
        </section>
        <section className="products-section mt-8">
          <h2 className="text-xl font-bold mb-4">Nuestros Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Aquí van los productos */}
          </div>
        </section>
        <section className="offers-section mt-8">
          <h2 className="text-xl font-bold mb-4">Ofertas del Mes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Aquí van las ofertas */}
          </div>
        </section>
        <section className="testimonials-section mt-8">
          <h2 className="text-xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Aquí van los testimonios */}
          </div>
        </section>
        <section className="newsletter-section mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Suscríbete a Nuestro Boletín</h2>
          <form>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="border p-2 w-full rounded mb-4" 
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Suscribirse</button>
          </form>
        </section>
      </main>
      <footer className="bg-white shadow mt-8">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-700">&copy; 2024 IXLanding. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
