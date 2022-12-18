import './Product.scss';

const Product = ({image, link}) => {
  return (
    <div className='product-card-container'>
      <div className="product-browser">
        <div className="product-circle"></div>
        <div className="product-circle"></div>
        <div className="product-circle"></div>
      </div>
      <a href={link} target='_blank'>
        <img src={image} alt='Project' className="product-img" />
      </a>
    </div>
  )
}

export default Product;