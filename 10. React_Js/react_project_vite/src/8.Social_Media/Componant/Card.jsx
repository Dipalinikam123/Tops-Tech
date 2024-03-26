import React from 'react'
import {Heart, Trash} from 'lucide-react'

export default function Card({post_e}) {

  
  return (
    <div className="card ms-5 mb-3" style={{width: "18rem"}}>
 
  <div className="card-body">
    <h5 className="card-title">{post_e.title}
    <span className='position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger'>{post_e.reactions}
    </span>
    <span className='position-absolute fs-6 top-0 start-100 translate-middle badge rounded-pill bg-danger'><Trash role='button' onClick={()=>hanleDelete(post_e.id)}/>
    </span>
    </h5>
    <p className="card-text">{post_e.body}</p>
    <p >User_Id :- {post_e.userId}</p>
     <span># HashTags :-</span>
      {
        post_e.tags.map((tags)=> <span className='badge text-bg-primary mb-2 p-2 ms-2'>#{tags}</span>)
      }
  
  </div>
</div>
  )
}
