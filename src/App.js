import {useDispatch, useSelector} from "react-redux";


const {name, age, car, car: {model}} = {name: 'vasya', age: 23, car: {model: 'audi', color: 'red'}};
console.log(name);
console.log(car);
console.log(model);

const NestedChild = () => {
    // const counter = useSelector((state) => {
    // console.log('from useSelector', state)
    // return state.counter.value
    // })

    // const counter = useSelector(state => console.log(state.counter))
    // console.log(counter.counter.value);

    const dispatch = useDispatch()
    return(<div>
        {/*{counter.counter.value}*/}
        <button onClick={()=>{
            dispatch({type:'INC'})
        }}>inc</button>
        <br/>
        {2+1}
    </div>);
}





export default function App() {
    return (<NestedChild/>)
}


