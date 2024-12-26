async function getUserData (id){
    const res = await fetch(`http://localhost:3000/api/${id}`)
    const resData = await res.json();
    return resData.result
}

const UserId = async({params}) => {
const getId = await getUserData(params.userid)
// console.log(getId)
  return (
    <div>
      <h6>{getId.name}</h6>
      <h6>{getId.age}</h6>
      <h6>{getId.email}</h6>
    </div>
  )
}

export default UserId

// import React from 'react'

// const Getdtails = () => {
//   return (
//     <div>Getdtails</div>
//   )
// }

// export default Getdtails