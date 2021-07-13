import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "./services/API";
import React, {useEffect} from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Counter from "./components/counter/Counter"
const NestedChild = () => {

    const dispatch = useDispatch()
    const posts = useSelector(({posts}) => posts)

    useEffect(() => {
        getPosts().then(value => dispatch({
        type: 'ADD_POSTS',
        posts: value.data}))
    },[])


    return(<div>
            <Router>
                    <div>
                        <Link to={'/'}>to starting page</Link>
                        <br/>
                        <Link to={'/Counter'}>to Counter</Link>
                        <br/>
                        <Link to={'/Users'}>to Users</Link>
                        <br/>
                        <Link to={'/Users/Posts'}>to Posts of Users</Link>
                        <br/>
                        <Link to={'/Users/Posts/Comments'}>to Comments on Posts</Link>

                        <Route path={'/Counter'} render={() => <Counter/>}/>
                    </div>
            </Router>
            <div>
                <ul>
                    {posts.map(post =>(<li key={post.id}>{post.title}</li>))}
                </ul>

            </div>
        </div>);
}



export default function App() {
    return (<NestedChild/>)
}


