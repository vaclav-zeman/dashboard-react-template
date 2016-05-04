import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header className="Header">
      <Link to="/" className="Header-logo">
        Logo
      </Link>
    </header>
  );
};

Header.propTypes = {
  toggleForm: PropTypes.func.isRequired
};

export default Header;
