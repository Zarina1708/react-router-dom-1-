import {useEffect} from "react"
import {useState} from "react"
import User from "../../components/user/User"


export default function MainPage() {

    const [users, setUsers] = useState([])



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw response.status
                }
            })
            .then(data => setUsers(data))
            .catch(error => console.log(error))
    }, [])


    const [more, setMore] = useState('')

    const {name, username, address, email} = more

    return (
        <>
            <h1> Main Page</h1>
            <div style={{display: 'flex'}}>
                <div>
                    {
                        users.map((item) => (
                            <div>
                                <User key={item.id} userInfo={item}/>
                                <button onClick={() => setMore(item)}>подробнее</button>
                            </div>
                        ))
                    }
                </div>


                <ul>
                    <li>name: {name}</li>
                    <li>username: {username}</li>
                    <li>email: {email}</li>
                    <li>city: {address?.city}</li>
                </ul>

            </div>

        </>
    )
}
