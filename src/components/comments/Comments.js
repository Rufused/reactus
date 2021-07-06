import {getComments} from "../../services/API";
import React, {useEffect, useState} from 'react'

export default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(()=>{
        getComments().then(value => setComments(value.data))
    },[])

    return(
        <div>
            {
                comments.map((value)=> <div>{value.id} - {value.body}</div>)
            }
        </div>
    )
}
