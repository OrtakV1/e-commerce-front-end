import React, { useState } from 'react';
import './navbar.css'
import { useNavigate } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';

const NavbarJS = ({ setReload }) => {
  const [status, setStatus] = useState(false)
  const navigate = useNavigate()

  const [selectedItem, setSelectedItem] = useState('');

  const handleNavItemSelection = (itemName) => {
    localStorage.setItem('navbar', itemName);
    setSelectedItem(itemName);
    navigate('/carpettypes');
    setStatus(true)
  };

  if (status === true) {
    setReload(true)
    setStatus(false)
  }



  return (
    <>
      <nav
        className="custom-navbar navbar navbar-expand-md navbar-dark "
        aria-label="Furni navigation bar"
        style={{ backgroundColor: '#3b5d50' }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Furni<span>.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={` nav-item ${selectedItem === 'Renk' ? 'active' : ''}`}>
              <NavDropdown className={'nav-item '}
                title="Dropdown"
                id={` navbarDropdownMenuLink`}
                
              >
                <NavDropdown.Item className={'dropdown-item'} href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              </NavDropdown>
              </li>
              <li className={` nav-item ${selectedItem === 'Renk' ? 'active' : ''}`}>
                <a className="nav-link" href="#/" onClick={() => handleNavItemSelection('Renk')}>
                  Renk
                </a>
              </li>
              <li className={` nav-item ${selectedItem === 'Modern Halı Tarzları' ? 'active' : ''}`}>
                <a className="nav-link" href="#/"
                  onClick={() => handleNavItemSelection('Modern Halı Tarzları')}>
                  Modern Halı Tarzları
                </a>
              </li>
              <li className={` nav-item ${selectedItem === 'Premium Özel Desen Kilimler' ? 'active' : ''}`}>
                <a className="nav-link" href="#/"
                  onClick={() => handleNavItemSelection('Premium Özel Desen Kilimler')}>
                  Premium Özel Desen Kilimler
                </a>
              </li>
              <li className={` nav-item ${selectedItem === 'Mutfak Halıları' ? 'active' : ''}`}>
                <a className="nav-link" href="#/"
                  onClick={() => handleNavItemSelection('Mutfak Halıları')}>
                  Mutfak Halıları
                </a>
              </li>
              <li className={` nav-item ${selectedItem === 'Çocuk Halıları' ? 'active' : ''}`}>
                <a className="nav-link" href="#/"
                  onClick={() => handleNavItemSelection('Çocuk Halıları')}>
                  Çocuk Halıları
                </a>
              </li>
              <li className={` nav-item ${selectedItem === 'İndirimler' ? 'active' : ''}`}>
                <a className="nav-link" href="#/" onClick={() => handleNavItemSelection('İndirimler')}>
                  İndirimler
                </a>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="/signin">
                  <img src="/images/user.svg" alt="User Icon" />
                </a>
              </li>
              <li>
                <a className="nav-link" href="/shop">
                  <img src="/images/cart.svg" alt="Cart Icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarJS;
