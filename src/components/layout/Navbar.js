import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title}) => {
    return (
        <nav className='navbar bg-primary'>  
        <h1>
            <i className={icon} /> {title}
        </h1>
        </nav>
    )
}

Navbar.defaultProps = { 
    title: 'Github Finder',
    icon: 'fab fa-github'
};

// using propTypes is optional, but good practice to make sure everything is working as expected
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar