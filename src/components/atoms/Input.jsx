
import PropTypes from 'prop-types';

const Input = ({ type, id, name, placeholder, className, value, onChange }) => (
  <input
    type={type}
    id={id}
    name={name}
    placeholder={placeholder}
    className={`border p-2 rounded ${className}`}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password']),
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
};

export default Input;
