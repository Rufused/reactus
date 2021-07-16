import {useSelector} from "react-redux";
import React from "react";

export default function Users() {

    const users = useSelector(({users}) => users)


    return(
        <div><ul>{users.map(user =>(<li key={user.id}>{user.name}</li>))}</ul></div>
    )
}