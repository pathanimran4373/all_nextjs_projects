"use client"

import React from 'react'

const StudentDetail = ({params}) => {
  return (
    <div>
        <h1>StudentDetail</h1>
        {params.student}
    </div>
  )
}

export default StudentDetail