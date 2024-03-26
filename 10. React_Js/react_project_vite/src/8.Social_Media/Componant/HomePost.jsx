import React, { useContext } from 'react'
import Card from './Card'
import { PostListData } from '../Store/PostListStoreProvider';

export default function HomePost() {
 const {postList}= useContext(PostListData)
  console.log("🚀 ~ HomePost ~ postList:", postList)
  return (
    <div className=' w-100 d-flex flex-wrap gap-2 ms-4'>
         {
          postList.map((e,i)=>{
            return (
              <Card key={e.id} post_e={e} />
            )
          })
        }
        
    </div>
  )
}
