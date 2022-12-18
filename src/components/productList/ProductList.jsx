import Product from '../product/Product';
import './ProductList.scss';
import {data} from '../../data'

const ProductList = () => {
    return (
        <div className='productList-container'>
            <div className="productList-text">
                <div className="productList-title">
                    <h2>Create & Inspire</h2>
                </div>
                <div className="productList-descrip">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita, quas consequuntur quia voluptatum quo incidunt reiciendis officiis animi laborum perferendis iste tempore repudiandae eum ad eius quasi, aperiam sit?
                </div>
                <div className="productList-items">
                    {data.map((item) => (
                    
                    <Product key= {item.id} image={item.img} link={item.link}/>

                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default ProductList;