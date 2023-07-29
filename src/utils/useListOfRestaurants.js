import { useState, useEffect } from 'react'

const useListOfRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2095375&lng=72.864102&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await response.json()
    setListOfRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  return listOfRestaurants
}

export default useListOfRestaurants