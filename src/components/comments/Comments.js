import {useSelector} from "react-redux";
import React  from "react";




export default function Comments() {

    const comments = useSelector(({comments}) => comments)

    return(
        <div><ul>{comments.map(comment =>(<li key={comment.id}>{comment.name}</li>))}</ul></div>
    )
}