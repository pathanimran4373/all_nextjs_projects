import React from 'react'
import Link from 'next/link'
const UserName = async() => {
    const allData = await getUserData()
    // console.log(allData)
  return (
    <div>UserName
        {
            allData.map((ele)=>(
               <div key={ele.id}>
                 <h1><Link href={`username/${ele.id}`}>{ele.name}</Link></h1>
                <span><Link href={`username/${ele.id}/update`}>edit</Link></span>
               </div>
            ))
        }
    </div>
  )
}

export default UserName

async function getUserData (){
    const res = await fetch("http://localhost:3000/api")
    const data = await res.json();
    return data
}