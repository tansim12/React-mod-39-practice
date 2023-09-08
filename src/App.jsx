import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comment from './Comment'


function App() {
  const clickBtn = ()=> <Comment />

  return (
    <>
      <h1>React Practice</h1>
      <button onClick={clickBtn}>Click Fetch</button>
      <Comment></Comment>

    </>
  )
}

export default App
