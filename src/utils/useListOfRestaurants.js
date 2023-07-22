import { useState, useEffect } from 'react'

const useListOfRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2095375&lng=72.864102&page_type=DESKTOP_WEB_LISTING")
    const data = await response.json()
    console.log(data?.data?.cards[2]?.data?.data?.cards)
    setListOfRestaurants(data?.data?.cards[2]?.data?.data?.cards)
  }
  return listOfRestaurants
}

export default useListOfRestaurants