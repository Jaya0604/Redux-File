import React from 'react'

// function Child({chooseMessage}){
//     return(
//         <div >
//             <button onClick={()=> chooseMessage("God byes")}>Click Me</button>
//         </div>
//     )

// }
// export default Child;

function Child(props){
    return(
        <div>
            {props.message}
        </div>
    );
}
export default Child;