import React, { useEffect, useState } from 'react';
import axios from "axios";

function UserList() {
    const [userData, setUserData] = useState([]);
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
        {userData.map((user)=>{
            return(
                <div key={user.id}>{user.firstName}</div>
            )
        })}

      
    </div>
  )
}

export default UserList
