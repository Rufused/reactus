import {useSelector} from "react-redux";
import React  from "react";

export default function Posts() {

    const posts = useSelector(({posts}) => posts)


    return(
        <div><ul>{posts.map(post =>(<li key={post.id}>{post.title}</li>))}</ul></div>
    )
}