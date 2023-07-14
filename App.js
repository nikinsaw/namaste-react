import React from 'react';
import ReactDOM from 'react-dom/client';
import { resList } from './data';

/*
* Header
* -Logo
* - Nav Items

* Body
* - Search
* - RestaurantContainer
* - RestraurantCard
* - - Image
* - - Info
* - - - Name
* - - - Address
* - - - Rating

* Footer
* - Copyright
* - Links
* - Address
* - Contact
*
*
*/




const styledCard = {
  backgroundColor: "#f0f0f0"
}

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className='logo' src="https://marketplace.canva.com/EAEzOw_ovvE/1/0/1600w/canva-watercolor-food-logo-0GcpZ9_7Xls.jpg" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = resData?.info;
  return (
    <div className="restaurant-card" style={styledCard}>
      <div>
        <img className="restaurant-image" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`}
          alt="restaurant" />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    </div>
  );
};


const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="restaurant-container">
        {resList.map((restraunt) => <RestaurantCard key={restraunt?.info?.id} resData={restraunt} />)}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="footer-address">
        <p>Address</p>
      </div>
      <div className="footer-contact">
        <p>Contact</p>
      </div>
    </div>
  );
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
