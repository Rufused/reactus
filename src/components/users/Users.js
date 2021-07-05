import User from "./User";
import {getUsers} from "../../services/API";
import {useEffect, useState} from 'react'

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers(value.data))
    },[])

    return(
        <div>
            {
                users.map((value)=> <User key={value.id} user={value}/>)
            }
        </div>
    )
}
