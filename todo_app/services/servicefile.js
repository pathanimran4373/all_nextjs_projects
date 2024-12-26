// get data from api it is servicefile
export default async function getApi (){
    const res = await fetch('https://dummyjson.com/users')
    return res.json()
}








// import React from 'react'

// const ServiceFile = async() => {
//     let getVal = getData()
//     let getValue = await getVal
//   return (
//     <div>
//         <h1>ServiceFile</h1>
//         {
//             getValue.map((item)=>{
//                 return(
//                 <h2 key={item.id}>{}</h2>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default ServiceFile

// async function getData() {
//     const res = await fetch('https://dummyjson.com/users')
//     const data = await res.json()
//     return data.products
// }