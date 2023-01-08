import Product from '../product/Product';
import './ProductList.scss';
import {data} from '../../data'
import { useState } from 'react';
import LoadMoreButton from './LoadMoreButton';

const ProductList = () => {

    const [loadMore,setLoadMore] = useState(3);
    const initial_load = data.slice(0,loadMore);

    const handleLoad = () => {
        setLoadMore(loadMore);
    }

    console.log(loadMore)
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
                    {initial_load.map((item) => (
                    
                    <Product key= {item.id} image={item.img} link={item.link}/>

                    ))}
                    
                </div>
                <div className="loadmore-container">
                    <LoadMoreButton loadMore={handleLoad} name='See more...'/>
                </div>
            </div>
            
        </div>
    )
}

export default ProductList;