import Posts from "../posts/Posts";
export default function User({item: user}) {



    return(
        <div>{user.id} - {user.name}
        <Posts item={user}/>
        </div>



    )

}
