import React from 'react'
import Button from "./button"


const ProductList = async () => {

    // call the apin function
    
const productByFunction = await getData()
console.log(productByFunction)

  return (
    <div><h1>Product list by servar componant</h1>
<div>
    {
        productByFunction.map((item)=>{
            return(
                <div key={item.id}>{
                    item.title
                } 
                <Button price={item.price}/>
                </div>
            )
        })
    }
</div>
    </div>
  )
}

export default ProductList

async function getData() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json()
    return data.products
}