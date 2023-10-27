import React, { useEffect, useState } from 'react'
import axios from "axios";
function Row() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className="py-5 bg-dark">
        <div className="container px-4 px-lg-5 mt-5">

    <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
      {products.map(item=>(
         <div className="col mb-5">
         <div className="card h-100 w-60 p-3 ">
             
             <img className="card-img-top" height="250px" src={item.image} alt="..." />
            
             <div className="card-body p-4">
                 <div className="text-center">
                     
                     <h5 className="fw-bolder">{item.title}</h5>
                     
                     {item.price}
                 </div>
             </div>
             
             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                 <div className="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
             </div>
         </div>
     </div>
      ))}
    </div>
    </div>
    </section>
    
  )
}

export default Row