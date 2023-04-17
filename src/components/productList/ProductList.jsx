import Product from "../product/Product";
import "./ProductList.scss";
import { data, mobile } from "../../data";
import { useState } from "react";
import LoadMoreButton from "./LoadMoreButton";
import MobileProduct from "../product/MobileProduct";

const ProductList = () => {
  const [loadMore, setLoadMore] = useState(3);
  const initial = data.slice(0, loadMore);

  const handleLoad = () => {
    setLoadMore(loadMore + loadMore);
  };

  console.log(loadMore);
  return (
    <div className="productList-container">
      <div className="productList-text">
        <div className="productList-title">
          <h2>Create & Inspire</h2>
        </div>
        <div className="productList-descrip">
          This are some of my projects, I will try to keep this section updated
          but sometimes I just forget to up my newest projects here. I hope you
          like and also here are some mobile projects, so you can see it in Play
          Store or App Store. Hover the projects and you will see how they show
          to you.
        </div>
        <div className="productList-items">
          {initial.map((item) => (
            <Product key={item.id} image={item.img} link={item.link} />
          ))}
        </div>
        <div className="loadmore-container">
          <LoadMoreButton loadMore={handleLoad} name="See more..." />
        </div>
      </div>

      <div className="mobile-products">
        <h3 className="mobile-title">Mobile Apps</h3>

        <div className="mobile-cards">
          {mobile.map((item) => (
            <MobileProduct key={item.id} image={item.image} title={item.title}/>
          ))}
        </div>

        <div className="loadmore-container">
          <a href="https://play.google.com/store/apps/developer?id=AngeloCode" target="_blank"><LoadMoreButton name="Go to Play Store" /></a>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
