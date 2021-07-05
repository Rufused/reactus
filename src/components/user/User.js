import {getPosts, getUser} from "../../services/API";
import UserPosts from "../UserPosts/UserPosts";
import {useState} from "react";
import UserInfo from "../userInfo/UserInfo";



export default function User({user}) {

    let [posts, setPosts] = useState([]);
    let [info, setInfo] = useState(undefined)

   const postsOfUser = () => {
       getPosts(user.id).then(value => setPosts(value.data));
   }

   const InfoOfUser = () => {
       return (
              getUser(user.id).then(value => setInfo(value))
           )
   }

    return(
            <>
                <div>{user.id} - {user.name} - <button onClick={postsOfUser}>Posts</button>  <button onClick={() => InfoOfUser(user.id)}>user info</button></div>
                <UserPosts posts={posts}/>
                <UserInfo user={info}/>
            </>
    )
}


