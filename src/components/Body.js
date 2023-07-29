import { useEffect, useState, useContext } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import useListOfRestaurants from '../utils/useListOfRestaurants';
import UserContext from '../utils/UserContext';

const Body = () => {
  const listOfRestaurants = useListOfRestaurants()
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  const onlineStatus = useOnlineStatus()
  const { setUserName, loggedInUser } = useContext(UserContext)
  useEffect(() => {
    setFilteredRestraunt(listOfRestaurants)
  }, [listOfRestaurants])

  if (!onlineStatus) {
    return <h1>Looks like you are Offline!! Please check your internet connection</h1>
  }

  return (listOfRestaurants?.length === 0) ? <Shimmer /> : (
    <div className="body w-3/4 mx-auto m-4 p-4">
      <div className="flex filter items-center  pt-10 pb-6">
        <div className="bg-gray-200 flex justify-between rounded-xl px-4 py-2 m-2">
          <input className='bg-transparent' type="text" placeholder="Search for Restaurants" value={searchText} onChange={(e) => {
            setSearchText(e?.target?.value)
          }} />
          <button className="bg-gray-100 px-3 py-1 rounded-xl w-3/4" onClick={() => {
            setFilteredRestraunt(listOfRestaurants.filter(res => res.data.name.toLowerCase().includes(searchText.toLowerCase())))
          }}>Search</button>
        </div>
        {/* <button className=" bg-gray-100 mx-6 px-4 py-3 rounded-md filter-btn" onClick={() => {
          setFilteredRestraunt(listOfRestaurants.filter(res => res?.data?.avgRating > 4))
        }}>Top Rated Restaurants</button> */}
        <label className='ml-24'>User Name:</label>
        <input onChange={e => setUserName(e.target.value)} value={loggedInUser} className="bg-gray-100 mx-3 px-4 py-3 rounded-md filter-btn" type='text' />

      </div>
      <h3 className='p-3 pb-6 restaurant-cards-header font-sans font-medium text-xl'>Restaurants with online food delivery in Mumbai</h3>
      <div className="restaurant-container grid grid-cols-4 gap-x-14 gap-y-4">
        {filteredRestraunt?.map((restaurant) => restaurant?.data?.promoted && <RestaurantCardPromoted key={restaurant?.info?.id} resData={restaurant} /> || < RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)}
      </div>
    </div>
  );
};

export default Body;