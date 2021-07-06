import {getUserPosts} from "../../services/API";
import UserPosts from "../UserPosts/UserPosts";
import {useState} from "react";

export default function User({user}) {

    let [posts, setPosts] = useState([]);

   const postsOfUser = () => {
       getUserPosts(user.id).then(value => setPosts(value.data));
   }

    return(
            <>
                <div>{user.id} - {user.name} - <button onClick={postsOfUser}>click</button>
                </div>
                <UserPosts posts={posts}/>
            </>
    )
}


