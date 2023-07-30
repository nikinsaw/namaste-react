import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch()
  handleAddItem = (item) => {
    //dispatch(addItem(item))
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => {
        const { id, name, price, description, imageId, defaultPrice } = item?.card?.info
        return (
          <div key={id} className="menu-container py-5 font-sans">
            <div className="menu-card flex justify-between align-center border-b pb-12">
              <div className="menu-card-info w-10/12 ">
                <h3 className="text-base text-gray-800">{name}</h3>
                <h4 className="text-sm text-gray-600 ">{`₹${price / 100 || defaultPrice / 100}`}</h4>
                <p className="py-2 text-xs text-gray-400 tracking-wide">{description}</p>
              </div>
              <div className="relative menu-image-wrapper w-24 shadow-lg border-2 cover rounded-md">
                <img className="menu-item-image w-full cover rounded-lg " src={`${CDN_URL + imageId}`} alt="food" />
                <button
                  onClick={() => handleAddItem(item)}
                  className="absolute top-20 left-4 bg-white shadow-lg rounded-lg px-3 py-1 border-2 text-sm font-semibold">Add +</button>
              </div>
            </div>
          </div>
        )
      })}
    </div >
  )
}

export default ItemList;