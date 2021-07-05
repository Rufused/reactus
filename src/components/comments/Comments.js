import Comment from "./Comment";
import {getPosts} from "../../services/API";
import {useEffect, useState} from 'react'

export default function Comments() {
    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts().then(value => setPosts(value.data))
    },[])

    return(
        <div>
            {
                posts.map((value)=> <Comment key={value.id} post={value}/>)

            }
        </div>
    )
}
