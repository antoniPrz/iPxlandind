
import PropTypes from 'prop-types';

const ProductCard = ({ image, title, price, tag }) => (
  <div className="bg-white dark:bg-dark-secondary p-4 rounded-lg shadow-md text-center">
    <div className="relative">
      <img src={image} alt={title} className="mx-auto mb-4 w-full h-64 object-contain" />
      {tag && <span className="absolute top-2 left-2 bg-primary-pink text-white text-xs px-2 py-1 rounded">{tag}</span>}
    </div>
    <h3 className="text-lg font-semibold text-primary-purple dark:text-dark-text mb-2">{title}</h3>
    <p className="text-gray-700 dark:text-dark-text">Desde {price}</p>
  </div>
);

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

ProductCard.defaultProps = {
  tag: '',
};

export default ProductCard;
