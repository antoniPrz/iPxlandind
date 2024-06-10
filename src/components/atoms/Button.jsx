import PropTypes  from "react"

const Button = ({type, onClick, className, children} ) => {
    return (
    
    <button
    type = {type}
    onClick = {onClick}
    className={`px-4 py-2 rounded ${className}`}
    >
    {children}

    </button>)
}

Button.propTypes = {
    type: PropTypes.oneOf(['button','submit','reset']),
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    type: 'button',
    onClick : ()=>{},
    className:'',
}
export default Button 