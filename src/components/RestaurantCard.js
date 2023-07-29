import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';


const RestaurantCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext)
  const { id, name, cuisines, avgRating, cloudinaryImageId, area, aggregatedDiscountInfoV3 } = resData?.info;
  return (
    <>
      <Link key={id} className="restaurant-card pb-8 " to={`/restaurants/${id}`} >
        <div style={{ position: "relative" }}>
          <div className="overlay bg-gradient-to-b absolute h-28 w-full bottom-0 from-transparent to-black  rounded-b-lg "></div>
          {aggregatedDiscountInfoV3 && <p style={{ fontFamily: "sans-serif", fontSize: 20, fontWeight: 'bold', color: "white", position: "absolute", bottom: 0, padding: 15 }}>{aggregatedDiscountInfoV3?.header + " " + aggregatedDiscountInfoV3?.subHeader}</p>}
          <img className="restaurant-image  h-56 w-full object-cover  rounded-lg" src={`${CDN_URL + cloudinaryImageId}`}
            alt="restaurant" />
        </div>
        <h3 className='p-3 pb-0 text-lg text-gray-700 font-bold'>{name}</h3>
        <h4 className='px-3 text-gray-600 font-bold'>{avgRating} Stars</h4>
        <h5 className='px-3 text-gray-500 truncate '>{cuisines.join(', ')}</h5>
        <h5 className='px-3 text-gray-500'>{area}</h5>
        <h5 className='px-3 text-gray-500'>{loggedInUser}</h5>
      </Link>
    </>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <div className="flex flex-col absolute z-10 p-2">
          <p className="bg-black text-white px-2 py-1 rounded-md">Promoted</p>
        </div>
        <RestaurantCard resData={props?.resData} />
      </div>
    )
  }
}


export default RestaurantCard; 