import './LoadMoreButton.scss'

const LoadMoreButton = ({loadMore, name}) => {
  return (
    <>
        <button className='loadMoreButton' onClick={loadMore} >{name}</button>
    </>
  )
}

export default LoadMoreButton