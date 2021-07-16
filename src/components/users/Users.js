import User from "./User";
import {getUsers} from "../../services/API";
import React, {useEffect,useState} from 'react'
import {Route, Switch} from "react-router-dom";
import UserDetails from "../details/UserDetails";
export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers([...value.data]))
    },[])

    return(
        <div>
            {
                users.map((value)=> <User user={value}/>)
            }
            <Switch>
                <Route path={"/users/:id"} component={UserDetails}/>
            </Switch>
        </div>
    )
}
