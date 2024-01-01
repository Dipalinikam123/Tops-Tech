import React, { useReducer } from "react";
import { Button } from "reactstrap";

export default function UseReducer() {
  let [count, setCount] = useReducer(reducer, { count: 0 }); // count value is = {count:0}

  function reducer(state, action) {
    console.log("action", action);
    console.log("state", state); // state = {count:0}
    if (action === "Inc_1") {
      return { count: state.count + 1 }; //need to return ({}(object)) because initial value is an object ..., {count: state.count+1}=1
    } else if (action === "Inc_2") {
      return { count: state.count + 2 };
    } else if (action === "Inc_5") {
      return { count: state.count + 5 };
    } else {
      return state;
    }
  }
  return (
    <>
      <div style={{ width: "100%", margin: "100PX" }}>
        <h1>Count is {count.count}</h1>
        <Button onClick={() => setCount("Inc_1")}>INC-1</Button>
        <Button onClick={() => setCount("Inc_2")}>INC-2</Button>
        <Button onClick={() => setCount("Inc_5")}>INC-5</Button>
      </div>
    </>
  );
}

// import React, { useReducer } from 'react'
// import { Button } from 'reactstrap'

// export default function UseReducer() {

//   let [count, setCount]= useReducer(reducer,0)

//   function reducer(state,action){
//     console.log("action",action)
//     console.log("state",state)
//     if(action === "Inc_1"){
//        return state+1
//     }
//     else if(action === "Inc_2"){
//       return state+2
//     }
//     else if(action === "Inc_5"){
//       return state+5
//     }
//     else{
//       return state
//     }
//   }
//   return (
//     <>
//     <div style={{width:"100%",margin:"100PX"}}>
//         <h1>Count is {count}</h1>
//     <Button onClick={()=>setCount("Inc_1")}>INC-1</Button>
//     <Button onClick={()=>setCount("Inc_2")}>INC-2</Button>
//     <Button onClick={()=>setCount("Inc_5")}>INC-5</Button>
//     </div>
//     </>
//   )
// }
