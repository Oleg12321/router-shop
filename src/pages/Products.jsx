import { Link, useNavigate } from "react-router-dom";
import './Products.css'
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../App";
import ProductItemForm from "./ProductItemForm";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/reducer";
import { addToCartProduct } from "../store/cartReducer";



export default function Products() {

  const productData = useSelector((state) => state.product.items);
  const status = useSelector((state) => state.product.status);
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
    
  }, [dispatch, status]);

  const handlerAddToCart = (id) => {
    console.log(addToCartProduct(id));
    dispatch(addToCartProduct(id));
  }

  return (
    <main>
      <section className="pg-header">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-g-7">
              <h1>Products</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ul className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Products</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <ul className="photo-list">
          {productData &&
            productData.map((item) => (
              <li key={item.id} className="photo-list__item">
                <Link to={`/photo/${item.id}`} className="photo-list__link">
                  <h3 className="photo-list__title">{item.title}</h3>
                  <img src={item.url} alt="" className="photo-list__image" />
                </Link>
                <button onClick={() => handlerAddToCart(item.id)}>
                  Buy
                </button>
                <ProductItemForm />
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}


