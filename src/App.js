import Menu from './components/menu/Menu.js'
import Users from "./components/users/Users";
import {getUsers} from "./services/API";
import {useEffect, useState} from 'react'
export default function App() {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers(value.data))
    },[])


    return (
        <div className="App">
            <Users items={users}/>
        </div>
    );
}


