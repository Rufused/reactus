import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserPosts, getUsers,getPostComments} from "./API";

export default function GetData() {
    const users = useSelector(({users}) => users)
    const posts = useSelector(({posts}) => posts)
    const dispatch = useDispatch()
    useEffect(() => {
        getUsers().then(
            value => dispatch({
            type: 'ADD_USERS',
            users: value.data}))},
        [])



    useEffect(()=> {
        let data = []
        users.forEach(value => data.push(getUserPosts(value.id)))


        Promise.all(data)
            .then(value => value.map(post => post.data))
            .then(value => dispatch({
                type: 'ADD_POSTS',
                posts: value.flat()
            }))

    }, [users.length])


        useEffect(()=> {
        let data = []
        users.forEach(value => data.push(getPostComments(value.id)))


        Promise.all(data)
            .then(value => value.map(post => post.data))
            .then(value => dispatch({
                type: 'ADD_COMMENTS',
                comments: value.flat()
            }))

    }, [posts.length])

    return null
}