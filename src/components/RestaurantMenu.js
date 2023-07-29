import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom'
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams()
  const [showIndex, setShowIndex] = useState(null)

  const resInfo = useRestaurantMenu(resId)
  if (resInfo === null)
    return <Shimmer />

  const { name, costForTwoMessage, cuisines } = resInfo?.cards[0]?.card?.card?.info
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return <div className="menu p-6 flex-col w-5/12 m-0 mx-auto">
    <div className="flex-col">
      <h1 className="pt-3 pb-0 text-lg text-gray-900 font-bold">{name}</h1>
      <p className="pb-2 text-gray-600 ">{cuisines.join(", ")}</p>
      <p className="pb-3 text-gray-600 text-sm ">{costForTwoMessage}</p>
    </div>
    {categories.map((category, index) => {
      //controlled component
      return <RestaurantCategory
        key={category?.card?.card?.title}
        data={category?.card?.card}
        showItems={index === showIndex}
        setShowIndex={() => setShowIndex(index === showIndex ? null : index)} />
    }
    )}
  </div>

}
export default RestaurantMenu;