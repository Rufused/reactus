import {useEffect,useState} from 'react';

import User from "../user/User";

export default function Users({items}) {
    return(
        <div>
            {
                items.map((value)=> <User key={value.id} user={value}/>)
            }
        </div>
    )
}
