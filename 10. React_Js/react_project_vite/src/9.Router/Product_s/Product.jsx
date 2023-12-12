import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardRouter from './CardRouter'

export default function Product() {

  const navigate = useNavigate()
  const redirect = (id) => {
    navigate(`/singlepage/${id}`)
  }

  // -start- new ( 2 api call)
  const [allData, setAllData] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products',
    }).then((res) => {
      console.log("----", res.data)
      setAllData(res?.data)
    })
  }, [])
  //-end- new 
  return (
    <>
      <div className='container w-75 border d-flex justify-content-evenly bg-light flex-wrap '>

        {
          //   [1,2,3,4,5].map((e,i)=>{  --old--
          allData?.map((e, i) => { //--new modify-- //e.id for get id
            return <div key={i} className='h-50'> <CardRouter data={e} redirect={redirect}/> </div>
            // return <div onClick={()=>redirect(e.id)} role='button' key={i}
            //  className='d-flex justify-content-center align-items-center border border-dark rounded-3 p-1 m-3 bg-light'
            //  style={{width:"100px"}}>

            //   <img src={e.image} className='w-50' alt="" /> </div>
          })
        }
      </div>
    </>
  )
}



// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function Product() {
//   const navigate = useNavigate() // used for back page 
//   const redirect= (e)=>{ //call ob button or icons 
//     // navigate("/service") we can fix constant page also
//   //  navigate(-1) // used to recently visited back page
//   navigate(`/singlepage/${e}`)
//   }
//   return (
//     <>
//     <div style={{width:"80vw", backgroundColor:"rebeccapurple"}} className=" container d-flex justify-content-evenly align-items-center p-2">

//        {
//          [1,2,3,4,5].map((e,i)=>{
//            return (
//              <div
//              onClick={()=>redirect(e)}
//              style={{width:"50px", backgroundColor:"white"}}
//               key={i} role='button' className="d-flex justify-content-center align-items-center border border-dark rounded">{e}</div>
//              )
//             })
//           }
//       </div>
//      </>
//   )
  
// }
