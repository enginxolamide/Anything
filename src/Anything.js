import axios from "axios";
import React from "react";
import {useState, useEffect } from "react";

export const Anything = () => {
    const[look, setLook] = useState([])
    const anyname = ()=>{
        const url = 'http://localhost:3001/notes'
        axios.get(url).then(
            (res)=>{
           const data = res.data
           setLook(data)
            }
        )
       
    }
    useEffect(anyname,[])
  return (

    <div>anything
        {look.map(({id, content})=>(
<ul key={id}>
    <li>{content}</li>
</ul>
        ))}
    </div>
  )
}
