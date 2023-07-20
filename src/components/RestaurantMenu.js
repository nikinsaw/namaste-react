import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utils/constants";
import { useParams } from 'react-router-dom'
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null)
  const { resId } = useParams()
  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_URL + resId}`)
    const data = await response.json()
    console.log(data)
    setResInfo(data.data)
  };

  if (resInfo === null)
    return <Shimmer />

  const { name, costForTwoMessage, cuisines } = resInfo?.cards[0]?.card?.card?.info
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card

  return <div className="menu">
    <ul className="menu-container">
      <div>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwoMessage}</p>
      </div>
      {itemCards.map((item) => {
        const { id, name, price, description, imageId, defaultPrice } = item?.card?.info
        return (
          <li key={id} className="menu-card">
            <div className="menu-card-info">
              <h3>{name}</h3>
              <h4>{`₹${price / 100 || defaultPrice / 100}`}</h4>
              <p>{description}</p>
            </div>
            <div className="menu-image-wrapper">
              <img className="menu-item-image" src={`${CDN_URL + imageId}`} alt="food" />
            </div>
          </li>
        )
      })}
    </ul>
  </div>

}
export default RestaurantMenu;