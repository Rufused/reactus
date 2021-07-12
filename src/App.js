import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "./services/API";
import {useEffect} from "react";




const NestedChild = () => {
    const counter = useSelector(({counter: {value}}) => value)
    const posts = useSelector(({posts}) => posts)
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type:'CUST',payload: {custom: event.target.custom.value}})
    }

    const dispatch = useDispatch()

    useEffect(() => {
        getPosts().then(value => (posts.push(value.data)))})



    dispatch({
        type: 'ADD_POSTS',
        payload: {posts}
    })




    return(<div>
        {counter}
        {console.log(posts,'22222222222222222222222222')}
        {posts.map(post => console.log(post))}
        <br/>
        <button onClick={()=>{
            dispatch({type:'INC'})
        }}>Increment</button>
        <br/>
        <button onClick={()=>{
            dispatch({type:'DEC'})
        }}>Decrement</button>
        <br/>
        <button onClick={()=>{
            dispatch({type:'NUL'})
        }}>Reset</button>
        <br/>

        <form  onSubmit={handleSubmit}>
            <button type={"submit"}>Custom</button>
            <input name={"custom"} type="text"/>
        </form>

        <ul>
            {posts.map(post =>(<li key={post.id}>{post.title}{console.log(post,'!!!!!!!!!!!!!!!!!')}</li>))}
        </ul>


    </div>);
}



export default function App() {
    return (<NestedChild/>)
}


