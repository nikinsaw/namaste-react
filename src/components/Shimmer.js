const Shimmer = () => {
  const ShimmerCard = () => {
    return <div className="shimmer-card  pb-8">
      <div style={{}}>
        <div className=" bg-gray-100 h-56 w-full bottom-0 rounded-lg"></div>
      </div>
      <div className='p-4 m-2 mx-4 w-9/12 pb-0 text-lg bg-gray-300 rounded-md'></div>
      <div className='p-2 m-1 mx-4 w-2/6 bg-gray-300 rounded-md'></div>
      <div className='p-2 m-1 mx-4 w-10/12 bg-gray-200 rounded-md'></div>
      <div className='p-2 m-1 mx-4 w-3/5 bg-gray-200 rounded-md'></div>
    </div>
  }

  return (
    <>
      <div className='p-2 pt-24 m-4 my-9 w-3/12 mx-auto justify-start bg-gray-300'></div>
      <div className="shimmer-wrapper w-3/4 mx-auto grid grid-cols-4 gap-x-14 gap-y-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((val) => <ShimmerCard key={val} />)}
      </div>
    </>
  )
}

export default Shimmer