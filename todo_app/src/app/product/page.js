"use client"
import React from 'react'
import { useState,useEffect } from 'react';

const Product = () => {
    const [product,setData] = useState([]);

const productFunction = async()=> {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const getRes = await res.json();
        setData(getRes)
    } catch (error) {
        console.error('sorry,not found')
    }
}
    useEffect(()=>{
        productFunction();
    },[])
  return (
    <div>
        <h1>show product by client componanent</h1>
        <div>
            { console.log(product)
                // product.map((item)=>{
                //     return(
                //         <div key={item.id}>
                //             <span>{item.title}</span>
                //         </div>
                //     )
                // })
            }
        </div>
    </div>
  )
}

export default Product

// import React, { useState, useEffect } from 'react';

// const Product = () => {
//     const [produ, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchProducts = async () => {
//         try {
//             const res = await fetch('https://dummyjson.com/products');
//             const productsList = await res.json();
//             setData(productsList);
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     return (
//         <div>
//             <h1>Products</h1>
//             {console.log(produ)}
//             <div>
//                 {Array.isArray(produ) &&
//                     produ.map((item) => (
                    
//                         <div key={item.id}>
//                             {item.price}
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default Product;
