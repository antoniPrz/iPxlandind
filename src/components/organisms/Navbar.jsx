
import Button from '../atoms/Button';

// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, toggleTheme }) => (
  <header className="bg-white dark:bg-dark-secondary shadow">
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-3xl font-bold text-primary-purple dark:text-dark-text mb-4 md:mb-0">iPhoneXtreme</h1>
      <nav className="space-x-4">
        <a href="#" className="text-primary-purple dark:text-dark-text hover:text-primary-pink dark:hover:text-primary-pink">Home</a>
        <a href="#" className="text-primary-purple dark:text-dark-text hover:text-primary-pink dark:hover:text-primary-pink">Productos</a>
        <a href="#" className="text-primary-purple dark:text-dark-text hover:text-primary-pink dark:hover:text-primary-pink">Ofertas</a>
        <a href="#" className="text-primary-purple dark:text-dark-text hover:text-primary-pink dark:hover:text-primary-pink">Contacto</a>
      </nav>
      <Button onClick={toggleTheme} className="ml-4 bg-primary-pink text-white dark:bg-primary-purple hover:bg-primary-purple dark:hover:bg-primary-pink">
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </Button>
    </div>
  </header>
);

export default Navbar;
