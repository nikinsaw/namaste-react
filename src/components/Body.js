import { useEffect, useState } from 'react';
import { resList } from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import useListOfRestaurants from '../utils/useListOfRestaurants';

const Body = () => {
  const listOfRestaurants = useListOfRestaurants()
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus()
  useEffect(() => { //useEffect has two arguments, first is a callback function and second is an dependency array
    setFilteredRestraunt(listOfRestaurants)
  }, [listOfRestaurants])


  if (!onlineStatus) {
    return <h1>Looks like you are Offline!! Please check your internet connection</h1>
  }
  return (listOfRestaurants.length === 0) ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" placeholder="Search for Restaurants" value={searchText} onChange={(e) => {
            setSearchText(e?.target?.value)
          }} />
          <button className="search-btn" onClick={() => {
            setFilteredRestraunt(listOfRestaurants.filter(res => res.data.name.toLowerCase().includes(searchText.toLowerCase())))
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          setFilteredRestraunt(listOfRestaurants.filter(res => res?.data?.avgRating > 4))
        }}>Top Rated Restaurants</button>
      </div>
      <h3 className='restaurant-cards-header'>Restaurants with online food delivery in Mumbai</h3>
      <div className="restaurant-container">
        {filteredRestraunt.map((restraunt) => <RestaurantCard key={restraunt?.data?.id} resData={restraunt} />)}
      </div>
    </div >
  );
};

export default Body;