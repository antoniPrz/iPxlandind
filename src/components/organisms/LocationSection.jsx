

const LocationSection = () => (
  <section className="location-section bg-white dark:bg-dark-secondary mt-8 mb-8 p-6 rounded-lg shadow-md text-center">
    <h2 className="text-3xl font-bold mb-4 text-primary-purple dark:text-dark-text">Nuestra Ubicación</h2>
    <p className="text-gray-700 dark:text-dark-text mb-4">Nos encontramos en la siguiente dirección:</p>
    <p className="text-primary-purple dark:text-dark-text mb-4">
      Av. Nueva Providencia 2214, Piso 8, Oficina 87, Santiago, Chile
    </p>
    <div className="w-full h-64">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.817479403161!2d-70.61062718535642!3d-33.4239284807804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf5e15b8a151%3A0x4f25e22839e4a9b7!2sAv.%20Nueva%20Providencia%202214%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2sus!4v1626822915392!5m2!1ses-419!2sus"
        allowFullScreen=""
        loading="lazy"
        title="Ubicación de la Tienda"
      ></iframe>
    </div>
  </section>
);

export default LocationSection;
