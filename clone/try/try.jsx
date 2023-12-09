import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import "./product.css"
// import"../TopProducts/topProduct.css"
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3002/product").then(response => {
            setProducts(response.data)
        })
    }, [])
    return (
        <>
             <div className='product-list'>
              {products.map((item) => {
                  return (
                      <>                              
                         <Card image={item.image} productName={item.productName} quantity={ item.quantity} price={item.price} />
                      </>
                  )
                  
              })}
          </div>
        </>
    )
}
export default Product;

// card
import "./product.css"
const Card = ({ image,productName, quantity, price }) => {
    return (
        <div className="card">
             <img src={image} alt="picture of raksi" />
            <div className="detail-list" >
            
                <div>
                 {productName}
                </div>
            <div>
                {quantity}
            </div>
            <div>
                {price}
            </div>
          </div>
           
        </div>
    )
}
export default Card;