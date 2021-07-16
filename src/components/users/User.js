// import {getUserPosts} from "../../services/API";
// import UserPosts from "../UserPosts/UserPosts";
// import {useState} from "react";

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import React from "react";
export default function User({user}) {

   //  let [posts, setPosts] = useState([]);
   //
   // const postsOfUser = () => {
   //     getUserPosts(user.id).then(value => setPosts(value.data));
   // }
   //
   //  return(
   //          <>
   //              <div>{user.id} - {user.name} - <button onClick={postsOfUser}>click</button>
   //              </div>
   //              <UserPosts posts={posts}/>
   //          </>
   //   )
    return (
        <div>
            {user.name} - <Link to={'/users/' + user.id}>User Data</Link>
        </div>
    )

}


