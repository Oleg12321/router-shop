import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../GetProduct";
import { ProductContext } from "../App";
import axios from "axios";


export default function SingleProduct() {
  const { selectedPhoto, setSelectedPhoto } = useContext(ProductContext);
  const {id} = useParams()

  useEffect(() => {
    const fetchSinglePhoto = async () => {
    const getSingleProduct = await fetchSingleProduct(id)

    setSelectedPhoto(getSingleProduct);
    }
    fetchSinglePhoto()
  }, [id])
  


  return (
    <div>
      <section className="pg-header">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-g-7">
              <h1>Products</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ul className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item active">
                    <Link to={"/products"}>Products</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

        {selectedPhoto && (
          <div className="">
            <h1>{selectedPhoto.title}</h1>
            <img src={selectedPhoto.url} alt="" />
          </div>
        )}

    </div>
  );
}
