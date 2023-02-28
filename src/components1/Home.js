import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is home page</h1>
      <button onClick={()=>navigate('order-summary')}>Order Summary</button>
    </div>
  )
}
