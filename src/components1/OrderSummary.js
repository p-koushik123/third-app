import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Order_Summary() {
    const navigate=useNavigate();
  return (
    <div>
      <h1>Your Order is confirmed</h1>
      <button onClick={()=>  navigate('/-1')}>GoBack</button>
    </div>
  )
}
