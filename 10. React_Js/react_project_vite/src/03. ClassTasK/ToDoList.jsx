import React, { useState } from 'react'
import './indexToDo.css'
import { useEffect } from 'react';
import { CheckSquare } from 'lucide-react';

export default function ToDoList() {
    let cDate = new Date().toDateString();
    let [date,setDate] = useState("")
    let [text ,setText] = useState("")
    let [userArr,setUserArr]=useState([])

    useEffect(()=>{
        const data = localStorage.getItem("fullData");
        const normalDt= JSON.parse(data) || []
        setUserArr(normalDt)
    },[])

    function updateTime(){
    let time= new Date().toLocaleTimeString();
        setDate(time)
    }
    setInterval(updateTime,1000)

    function addData(ele){
    console.log("🚀 ~ file: ToDoList.jsx:10 ~ addData ~ ele:", ele)
    setText(ele?.target?.value)
    }

    function getDataBtn(){
        console.log("--------------")
        setUserArr([...userArr,text])
        localStorage.setItem("fullData",JSON.stringify([...userArr,text]))
        setText("")
    }
    function remove(index){
        let removeData = userArr.filter((e,i)=> i !== index)
        confirm("Are you sure..?") && setUserArr(removeData)
        localStorage.setItem("fullData", JSON.stringify(removeData))

    }

return (
    <>
        <div className='main-div'>
            <div className="date-time">
                <h1>Time:- {date}</h1>
                <h1>Date:- {cDate}</h1>
            </div>
            <div className="box-div"> 
                <h1>
                    To Do List 
                </h1>
                <input type="text" placeholder='Add Items' value={text} 
                onChange={(e)=>addData(e)}/>
                <button onClick={()=>getDataBtn()}> + </button>


        {
            userArr?.map((e,i)=>{
                return(
                <ol key={i}>
                    {/* <li></li> */}
                    <li className='line'><CheckSquare className='icon' 
                     onClick={()=>remove(i)}/> {e} </li> 
                </ol>                    
                )
            })
        }

            </div>
        </div>
    </>
)
}
