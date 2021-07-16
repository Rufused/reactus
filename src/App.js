import {useSelector} from "react-redux";
import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Counter from "./components/counter/Counter"
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
const NestedChild = () => {


    const posts = useSelector(({posts}) => posts)
    const comments = useSelector(({comments}) => comments)


    return(<div>
            <Router>
                    <div>
                        <Link to={'/'}>to starting page</Link>
                        <br/>
                        <Link to={'/Counter'}>to Counter</Link>
                        <br/>
                        <Link to={'/Users'}>to Users</Link>
                        <br/>
                        <Link to={'/Posts'}>to Posts of Users</Link>
                        <br/>
                        <Link to={'/Comments'}>to Comments on Posts</Link>

                        <Route path={'/Counter'} render={() => <Counter/>}/>
                        <Route path={'/Users'} render={() => <Users/>}/>
                        <Route path={'/Posts'} render={() => <Posts/>}/>
                        <Route path={'/Comments'} render={() => <Comments/>}/>
                    </div>
            </Router>

        </div>);
}



export default function App() {
    return (<NestedChild/>)
}


