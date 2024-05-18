import React from 'react'

export default function NewThread() {
  return (
    <div>
      <h1>
        新規スレッド
      </h1>
      
      <input type='text' placeholder='name'></input>
      <input type='text' placeholder='topic'></input>   
      <button>post</button>
    </div>
  )
}
