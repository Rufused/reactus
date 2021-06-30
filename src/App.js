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
            <Menu
                pages={['user page', 'component page', 'posts page']}
                classes={['target','xxx']}
            />
            <Users/>
            <Menu
                pages={['about','team']}
                classes={['asd','target']}
            />

        </div>
    );
}


