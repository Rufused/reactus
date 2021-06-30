import Post from "../post/Post";
import {useEffect, useState} from "react";

export default function Posts(item) {
        let [posts, setPosts] = useState([]);


        useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then(value => value.json())
            .then(value =>console.log(value));
    }, []);
        return(
            <div>
                {posts.map(post =><div>{post.title}</div>)}
            </div>
            )
}
