const Shimmer = () => {
  const ShimmerCard = () => {
    return <div className="shimmer-card">Cards</div>
  }

  return (
    <div className="shimmer-wrapper">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((val) => <ShimmerCard />)}
    </div>
  )
}

export default Shimmer