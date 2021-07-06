import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
export default function App() {
    return(
        <Router>
            <div>
                <Link to={'/users'}>to users page</Link>
                <br/>
                <Link to={'/posts'}>to posts </Link>
                <br/>
                <Link to={'/comments'}>to comments</Link>
                <Route path={'/users'} render={()=> <Users/>}/>
                <Route path={'/posts'} render={()=> <Posts/>}/>
                <Route path={'/comments'} render={()=> <Comments/>}/>
            </div>
        </Router>
    )

}
