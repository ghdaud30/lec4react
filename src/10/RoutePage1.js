import React from 'react'
import { useParams } from 'react-router-dom'

const RoutePage1 = () => {
    const item = useParams().item;
  return (
    <div>
      Page1 : {item}
    </div>
  )
}

export default RoutePage1
