import { Link } from 'react-router-dom';
import { CDN_URL } from '../utils/constants';


const RestaurantCard = ({ resData }) => {
  const { id, name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId, area, aggregatedDiscountInfoV3 } = resData?.data;
  return (
    <Link key={id} className="restaurant-card" to={`/restaurants/${id}`} >
      <div style={{ position: "relative" }}>
        <div className="overlay"></div>
        {aggregatedDiscountInfoV3 && <p style={{ fontFamily: "sans-serif", fontSize: 20, fontWeight: 'bold', color: "white", position: "absolute", bottom: 0, padding: 15 }}>{aggregatedDiscountInfoV3?.header + " " + aggregatedDiscountInfoV3?.subHeader}</p>}
        <img className="restaurant-image" src={`${CDN_URL + cloudinaryImageId}`}
          alt="restaurant" />
      </div>
      <h3>{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h5>{cuisines.join(', ')}</h5>
      <h5>{area}</h5>
      <p><span>₹</span>{`${costForTwo / 100} for two`}</p>
    </Link>
  );
};

export default RestaurantCard;