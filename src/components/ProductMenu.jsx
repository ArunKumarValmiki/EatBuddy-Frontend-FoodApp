import React, {useState, useEffect} from 'react'
import { API_URL } from '../api'
import { useParams } from 'react-router-dom'
import TopBar from '../components/TopBar'

const ProductMenu = () => {
    const [myProducts, setProducts] = useState([])

    const {firmId, firmName} = useParams()
    

    const productHandler = async() => {
        try {
            const response = await fetch(`${API_URL}/product/${firmId}/products`)
            const newProductData = await response.json()
            setProducts(newProductData.products)
        } catch (error) {
            console.error("Failed to fetch products : ", error);
        }
    }

    useEffect(()=>{
        productHandler();
    }, [])


  return (
    <>
      <TopBar />
      <section className="productSection">
        <h3>{firmName}</h3>
        {myProducts.map((product) => {
            return(
                <div className='productBox'>
                 <div>
                    <div><strong>{product.productName}</strong></div>
                    <div>₹{product.price}</div>
                    <div>{product.description}</div>
                 </div>
                 <div className='productGroup'>
                   <img src={`${API_URL}/uploads/${product.image}`} />
                   <div className="addButton"> ADD </div>
                 </div> 
                </div>   
            )
        })}
      </section>
    </>
  )
}

export default ProductMenu