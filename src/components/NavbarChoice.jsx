import PropTypes from 'prop-types';
function NavbarChoice({title, children, onClick}) {

    return (
        <div onClick={onClick}>
            {children}
            <span>{title}</span>
        </div>
    )
}

NavbarChoice.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
};

export default NavbarChoice;