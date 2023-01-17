import { useEffect } from "react"
import { useState } from "react"
import User from "../../components/user/User"





export default function MainPage () {

    const [users, setUsers] = useState([])

      
    


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }else {
                    throw response.status
                }
            })
            .then(data => setUsers(data))
            .then(error => console.log(error))
    },[])


    return (
        <>
            <h1> Main Page</h1>
            <div style={{display: 'flex'}}>
                <div>
                {
                    users.map(user => <User userInfo={user}/>)
                }  
                </div>
                

                {/* <ul>
                    <li>name: </li>
                    <li>username: </li>
                    <li>email: </li>
                    <li>city: </li>
                </ul> */}
            </div>
        
        </>
    )
}