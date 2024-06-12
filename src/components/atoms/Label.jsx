
import PropTypes from 'prop-types';

const Label = ({ htmlFor, className, children }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium ${className}`}>
    {children}
  </label>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Label.defaultProps = {
  className: '',
};

export default Label;
