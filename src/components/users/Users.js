// import {useEffect} from 'react';
// import {useState} from 'react'
// import User from "../user/User";
// import axios from "axios";
// export default function Users() {
//     let [users, setUsers] = useState([]);
//
//     axios(
//
//     )
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(value => value.json())
//             .then(usersFromServer =>{
//                 setUsers(usersFromServer)
//             });
//     }, []);
//     return (
//             <div>
//                 {
//                     users.map(user => <User item = {user}/>)
//                 }
//             </div>
//         );
// }


import User from "../user/User";

export default function Users({items}) {
    return(
        <div>
            {
                items.map((value)=> <User key={value.id} item={value}/>)
            }
        </div>
    )

}