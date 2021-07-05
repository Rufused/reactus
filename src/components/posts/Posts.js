import Post from "./Post";
import {getPosts} from "../../services/API";
import {useEffect, useState} from 'react'

export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts().then(value => setPosts(value.data))
    },[])

    return(
        <div>
            {
                posts.map((value)=> <Post key={value.id} post={value}/>)

            }
        </div>
    )
}
