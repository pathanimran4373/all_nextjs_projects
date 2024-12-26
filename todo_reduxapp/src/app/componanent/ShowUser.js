"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeUser} from "../redux/slice"

const ShowUser = () => {
    // select tag for show data
    const userName = useSelector((data)=>data.users)
    const dispatch = useDispatch();
    // console.log(userName)
  return (
    <div>
        <h1>users name</h1>
        {
            userName.map((item)=>{
                return(
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <button onClick={()=>dispatch(removeUser(item.id))}>remove</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ShowUser