import { CDN_URL } from '../utils/constants';

const styledCard = {
  backgroundColor: "#f0f0f0"
}

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = resData?.data;
  return (
    <div className="restaurant-card" style={styledCard}>
      <div>
        <img className="restaurant-image" src={`${CDN_URL + cloudinaryImageId}`}
          alt="restaurant" />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{`₹${costForTwo / 100} for two`}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;