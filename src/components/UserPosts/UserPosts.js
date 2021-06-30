import React from "react";
import UserPost from "./UserPost";

export default function UserPosts ({posts}) {
    return (
        <div>
            {posts.map(value => <UserPost id={value.id} title={value.title}/>)}
        </div>
    )
}
