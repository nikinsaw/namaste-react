import React, { useState } from 'react'
// import { CDN_URL } from '../utils/constants'
import ItemList from './ItemList'

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  handleClick = () => {
    setShowIndex()
  }
  return (
    <div className="w-full mx-auto shadow-lg p-4 rounded-lg border-gray-100  border-2 m-4">
      <div className='flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-bold text-lg'>{data.title} {`(${data.itemCards.length})`} </span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  )
}

export default RestaurantCategory