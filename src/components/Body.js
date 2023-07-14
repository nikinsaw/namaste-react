import { useState } from 'react';
import { resList } from '../utils/mockData';
import RestaurantCard from './RestaurantCard';


const Body = () => {
  // local state Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          setListOfRestaurants(old => old.filter(res => res.info.avgRating > 4))
          console.log(listOfRestaurants)
        }} >Top Rated Restaurants</button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restraunt) => <RestaurantCard key={restraunt?.info?.id} resData={restraunt} />)}
      </div>
    </div>
  );
};

export default Body;