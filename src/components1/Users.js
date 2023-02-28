import React from 'react'
// import { Outlet} from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
export default function Users() {
  const[searchParams, setSearchParams]=useSearchParams();
  const showActiveUsers=searchParams.get('filter') ==='active';
  return (
    <div>
      <button onClick={()=> setSearchParams({filter : 'active'})}>Active Users</button>
      <button onClick={()=> setSearchParams({})}>Reset Users</button>
      {
        showActiveUsers ? <h2>These Are Active Users</h2> : <h2>All users</h2>
      }
      {/* <Outlet/> */}
    </div>
  )
}
