import React from "react";
import { useParams } from "react-router-dom";
export default function UserDetails() {
  const param = useParams();
  const userId = param.userId;
  return (
    <div>
      <h3>User Details :{userId}</h3>
    </div>
  );
}
