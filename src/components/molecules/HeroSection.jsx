
import Button from '../atoms/Button';

const HeroSection = () => (
  <section className="hero-section bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-md text-center mt-8 mb-8">


    <h2 className="text-4xl font-bold mb-4 text-primary-purple dark:text-dark-text">Descubre lo Último en Tecnología</h2>
    <p className="text-gray-700 dark:text-dark-text mb-4">iPhones y MacBooks a los Mejores Precios</p>
    <Button className="bg-primary-pink text-white dark:bg-primary-purple hover:bg-primary-purple dark:hover:bg-primary-pink">
      Comprar Ahora
    </Button>
  </section>
);

export default HeroSection;
