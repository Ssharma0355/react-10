import React, { useEffect, useState } from 'react';
import axios from "axios";

function UserList() {
    const [userData, setUserData] = useState([]);
    const [value,setValue] = useState("");
    // const debuseDecouncer
    const getUserList=()=>{
        axios.get('https://dummyjson.com/users')
            .then((res) => setUserData(res.data.users))
    }

    useEffect(()=>{
        getUserList();
    },[]);
    console.log(userData);
  return (
    <div>
        <div>
            <input type="text" onChange={(e)=>setValue(e.target.value)}  />
        </div>
        {userData.map((user)=>{
            return(
                <div key={user.id}>{user.firstName}</div>
            )
        })}

      
    </div>
  )
}

export default UserList
