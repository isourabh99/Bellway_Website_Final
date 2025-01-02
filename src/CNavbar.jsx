import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo9.png';
import './Navbar.css';

const serviceDropdown = [
  {
    id: 1,
    title: "Artificial Intelligence",
    path: "/artificial-intelligence",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Mobile Application Development",
    path: "/mobile-application-development",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Web  Development",
    path: "/web-development",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "UX/UI Design",
    path: "/ux-ui-design",
    cName: "submenu-item",
  },
  {
    id: 5,
    title: "Digital Marketing",
    path: "/digital-marketing",
    cName: "submenu-item",
  },
  {
    id: 6,
    title: "ERP Services",
    path: "/ERP-Services",
    cName: "submenu-item",
  },
  {
    id: 7,
    title: "MVP Development",
    path: "/mvp-development",
    cName: "submenu-item",
  },
  {
    id: 8,
    title: "SaaS Development",
    path: "/saas-development",
    cName: "submenu-item",
  },
  {
    id: 9,
    title: "Wordpress Development",
    path: "/wordpress",
    cName: "submenu-item",
  },
];

const productDropdown = [
  {
    id: 1,
    title: 'On Demand Apps',
    subItems: [
      { id: 11, title: 'Bellway Grocery (Blinkit Clone)', path: '/bellway-grocery' },
      { id: 12, title: 'Foodo (Zomato Clone)', path: '/foodo' },
      { id: 13, title: 'Fresh And Red Delivery (Licious Clone)', path: '/fresh-and-red-delivery' },
    ],
  },
  { id: 2, title: 'Ecommerce (Bell Store)', path: '/bell-store' },
  {
    id: 3,
    title: 'Service Apps',
    subItems: [
      { id: 14, title: 'Make Your Trip (Make My Trip Clone)', path: '/make-your-trip' },
      { id: 9, title: 'Go Hotel', path: '/go-hotel' },
      { id: 16, title: 'Multi Service', path: '/multi-service' },
    ],
  },
  { id: 4, title: 'Ur Fine (Practo Clone)', path: '/urfine' },
  { id: 5, title: 'Team-11 (Dream-11 Clone)', path: '/team11' },
  { id: 6, title: 'Movikat (OTT Platform)', path: '/movikat' },
  { id: 10, title: 'Delicious Meals Delivery', path: '/delicious-meals-delivery' },
  { id: 11, title: 'Home-C', path: '/home-C' },
  { id: 12, title: 'Daily Bills (Khata Bill Clone)', path: '/daily-bills' },
];

const aboutDropdown = [
  { id: 1, title: 'About', path: '/about' },
  { id: 2, title: 'Career With Us', path: '/career-with-us' },
];

const dropdownIcon = <span className="dropdown-icon">&#9660;</span>;

function Dropdown({ visible, items }) {
  const [visibleSubItems, setVisibleSubItems] = useState({});

  const toggleSubItems = (id) => {
    setVisibleSubItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ul className={`services-submenu ${visible ? 'show' : ''}`}>
      {items.map((item) => (
        <li key={item.id} className="submenu-item">
      
          {item.subItems ? (
            <div className='pl-3 py-2 hover:bg-red-600' onClick={() => toggleSubItems(item.id)}>
              {item.title} {dropdownIcon}
              <ul className={`   nested-submenu ${visibleSubItems[item.id] ? '' : ''}`}>
                
                {item.subItems.map((subItem) => (
                  <li key={subItem.id}>
                    <Link to={subItem.path} className="submenu-item-link">
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link to={item.path} className="submenu-item-link">
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

const CNavbar = () => {
  const [serviceDropdownVisible, setServiceDropdownVisible] = useState(false);
  const [productDropdownVisible, setProductDropdownVisible] = useState(false);
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand ">
          <a href="/">
            <img loading="lazy"  src={logo} className="logo" alt="Logo" />
          </a>
        </div>

        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </div>
        <div className={`navbar-collapse ${mobileMenuVisible ? "show" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <div
                className="nav-link"
                onMouseEnter={() => setAboutDropdownVisible(true)}
                onMouseLeave={() => setAboutDropdownVisible(false)}
              >
                About Us {dropdownIcon}
                <Dropdown
                  visible={aboutDropdownVisible}
                  items={aboutDropdown}
                />
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onMouseEnter={() => setServiceDropdownVisible(true)}
                onMouseLeave={() => setServiceDropdownVisible(false)}
              >
                Services {dropdownIcon}
                <Dropdown
                  visible={serviceDropdownVisible}
                  items={serviceDropdown}
                />
              </div>
            </li>
            <li className="nav-item ">
              <div
                className="nav-link "
                onMouseEnter={() => setProductDropdownVisible(true)}
                onMouseLeave={() => setProductDropdownVisible(false)}
              >
                Products {dropdownIcon}
                <Dropdown
                  visible={productDropdownVisible}
                  items={productDropdown}
                />
              </div>
            </li>
            {/* <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/our-work" className="nav-link">
                Our Work
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CNavbar;
