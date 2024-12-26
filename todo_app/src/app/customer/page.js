// Learn Nested routing by using Link

"use client"
import React from 'react'
import Link from 'next/link'
const CustomerPage = () => {
  return (
    <div>
        <Link href='customer/details'><h1>CustomerPage</h1></Link>
        
    </div>
  )
}

export default CustomerPage