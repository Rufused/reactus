import {useDispatch,useSelector} from "react-redux";
import {getPosts, getUsers} from "../../services/API";
import {useEffect} from "react";

export default function Users() {
    const dispatch = useDispatch()
    const users = useSelector(({users}) => users)

    useEffect(() => {
        getPosts().then(value => dispatch({
        type: 'ADD_USERS',
        users: value.data}))
    },[])

    return(<div>
        {
            users.map(value => {})
        }
    </div>)

}
