import React from 'react'
import { useState } from "react";
import Child from "./Child";

// function Parent(){
//     const [message, setMessage] = useState("Hello World");
//     function chooseMessage(msg){
//         setMessage(msg)
//     }
//     return(
//         <div>
            
//             <p>{message}</p>
//             <Child chooseMessage={chooseMessage}/>
//         </div>
//     )

// }
// export default Parent;

function Parent(){
    const data ="i am from Parent component";
    return(
<div>
    <Child message={data}/>
</div>
    );
}
export default Parent