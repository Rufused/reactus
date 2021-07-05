import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
export default function App() {
    return(
        <Router>
            <div>
                <Link to={'/users'}>to users page</Link>
                <br/>
                <Link to={'/posts'}>to posts </Link>
                <Route path={'/users'} render={()=> <Users/>}/>
                <Route path={'/posts'} render={()=> <Posts/>}/>
            </div>
        </Router>
    )

}
