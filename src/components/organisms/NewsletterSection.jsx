
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const NewsletterSection = () => (
  <section className="newsletter-section  bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-md text-center mt-8 mb-8">
    <h2 className="text-2xl font-bold mb-4 text-primary-purple dark:text-dark-text">Suscríbete a Nuestro Boletín</h2>
    <form className="flex flex-col items-center">
      <Input
        type="email"
        id="newsletter-email"
        name="email"
        placeholder="Tu correo electrónico"
        className="w-full sm:w-2/3 md:w-1/2 mb-4 dark:bg-dark-highlight dark:text-dark-text"
      />
      <Button type="submit" className="w-full sm:w-2/3 md:w-1/2 bg-primary-pink text-white dark:bg-primary-purple hover:bg-primary-purple dark:hover:bg-primary-pink">
        Suscribirse
      </Button>
    </form>
  </section>
);

export default NewsletterSection;
