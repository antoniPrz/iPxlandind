
// import PropTypes from 'prop-types';

// const ServiceCard = ({ icon, title, description }) => (
//   <div className="bg-white dark:bg-dark-secondary p-4 rounded-lg shadow-md text-center">
//     <i className={`icon-${icon} text-primary-purple dark:text-dark-text mb-4`} />
//     <h3 className="text-lg font-semibold text-primary-purple dark:text-dark-text mb-2">{title}</h3>
//     <p className="text-gray-700 dark:text-dark-text">{description}</p>
//   </div>
// );

// ServiceCard.propTypes = {
//   icon: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// export default ServiceCard;


import PropTypes from 'prop-types';
import { FaTools, FaMicrochip, FaLaptopCode } from 'react-icons/fa';

const ICONS = {
  wrench: FaTools,
  microchip: FaMicrochip,
  software: FaLaptopCode,
};

const ServiceCard = ({ icon, title, description }) => {
  const IconComponent = ICONS[icon];
  return (
    // <div className="bg-white dark:bg-dark-secondary p-4 rounded-lg shadow-md text-center flex flex-col items-center">
    <div className="bg-white dark:bg-dark-secondary p-4 rounded-lg shadow-lg border-2 border-fuchsia-200 dark:border-primary-pink text-center flex flex-col items-center">
      <IconComponent className="text-primary-purple dark:text-dark-text mb-4" size={40} />
      <h3 className="text-lg font-semibold text-primary-purple dark:text-dark-text mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-dark-text">{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
