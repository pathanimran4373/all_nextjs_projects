// learn routing by using Redirect navigation

import React from 'react'
import {redirect} from "next/navigation"
const Person = () => {
    // its go on login page
    redirect('/login')
  return (
    <div>Contact specific Person
        <h1>imran khan</h1>
    </div>
  )
}

export default Person