import {getPostComments} from "../../services/API";
import React, {useState} from "react";

export default function Post({post}) {

    let [PostComments, setPostComments] = useState([]);

   const posted = () => {
       getPostComments(post.id).then(value => setPostComments(value.data));
   }

    return(
            <>
                <div>{post.id} - {post.title} - <button onClick={posted}>click</button></div>
                <div>{PostComments.map(value => (<div>{value.id}. {value.body}</div>))}</div>
            </>
    )
}
