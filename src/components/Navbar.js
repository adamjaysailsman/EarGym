import React from 'react';
import { Link } from 'react-router-dom';
import HearingIcon from '@mui/icons-material/Hearing';

const linkStyle = {
  color: 'white',
  fontSize: '20px',
  backgroundColor: '#24252a',
};

const Navbar = () => {
  return (
    <header>
      <Link to="/" style={linkStyle}>
        EAR GYM <HearingIcon style={{ backgroundColor: '#24252a' }} />
      </Link>
      <nav>
        <ul className="nav__links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/piano">PIANO</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
