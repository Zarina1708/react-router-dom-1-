import { useState } from "react"




export default function User ({userInfo}) {

    const [user, setUser] = useState({})

    function getUser(){
        fetch(`https://jsonplaceholder.typicode.com/users/${userInfo.id}`)
        .then(response => response.json())
        .then(data => setUser(data))
    }
  


    return (
        <div>
        
        <h3>{userInfo.name}</h3>

        {
            user && (
                <ul>
                    <li>name: {user.name}</li>
                    <li>username: {user.username}</li>
                    <li>email: {user.email}</li>
                    <li>city: {user?.address?.city}</li>
                </ul>
            )
        }
        <button value={userInfo.id} onClick={getUser} >подробнее</button>

     
        <p>-----------------</p>

        </div>
    )
}