import {getPosts} from "../../services/API";
import React, {useState} from "react";

export default function Post({post}) {

    let [posts, setPosts] = useState([]);

   const posted = () => {
       getPosts(post.id).then(value => setPosts(value.data));
   }


    return(
            <>
                <div>{post.id} - {post.title} - <button onClick={posted}>click</button></div>
                <div>{posts.map(value => (<div>{value.id}. {value.title}</div>))}</div>
            </>
    )
}
