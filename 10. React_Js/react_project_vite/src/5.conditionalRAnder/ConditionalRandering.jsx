import React from 'react'

export default function ConditionalRandering() {

    const newUser = true 
                                                  
  return (
    <>
    ConditionalRandering                                                                      



     
    {
        newUser ? <h1>well-come Admin</h1> : <h1>well come-back admin</h1>
    }
    {/* ================= */}

    {
      newUser && <h1>well-come Admin</h1>
    }
    </>
  )
}
