import React from 'react'
import Header from './components/header/Header'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div  className="min-h-screen bg-red-700 text-white py-[30px] 2xl:py-[50px] px-[5%]">
      <Header/>
      <Home/>
    </div>
  )
}

export default App