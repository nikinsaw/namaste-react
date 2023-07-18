import { useEffect, useState } from 'react';
import { resList } from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
  // local state Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => { //useEffect has two arguments, first is a callback function and second is an dependency array
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2095375&lng=72.864102&page_type=DESKTOP_WEB_LISTING")
    const data = await response.json()
    console.log(data)
    setListOfRestaurants(data?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestraunt(data?.data?.cards[2]?.data?.data?.cards)
  }
  console.log("body rendered")
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
          setListOfRestaurants(old => old.filter(res => res.info.avgRating > 4))
        }}>Top Rated Restaurants</button>
      </div>
      <div className="restaurant-container">
        {filteredRestraunt.map((restraunt) => <RestaurantCard key={restraunt?.data?.id} resData={restraunt} />)}
      </div>
    </div >
  );
};

export default Body;