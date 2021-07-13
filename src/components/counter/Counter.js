import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";


export default function Counter() {
const dispatch = useDispatch()
    const counter = useSelector(({counter: {value}}) => value)
    const [inp, setInp] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type:'CUST',payload: +inp})
    }


    return(
        <div>
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
            </div>
    )
}
