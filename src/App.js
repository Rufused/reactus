import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "./services/API";
import {useEffect, useState} from "react";

const NestedChild = () => {
    const counter = useSelector(({counter: {value}}) => value)
    const posts = useSelector(({posts}) => posts)

    const [inp, setInp] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type:'CUST',payload: +inp})
    }

    const dispatch = useDispatch()

    useEffect(() => {
        getPosts().then(value => dispatch({
        type: 'ADD_POSTS',
        posts: value.data}))
    },[])



    return(<div>
        {counter}
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
            <input name={"custom"} type="text" value={inp} onChange={({target: {value}}) => setInp(value)}/>
        </form>

        <ul>
            {posts.map(post =>(<li key={post.id}>{post.title}</li>))}
        </ul>

    </div>);
}



export default function App() {
    return (<NestedChild/>)
}


