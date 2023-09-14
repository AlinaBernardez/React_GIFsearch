import React from 'react'
import './App.css'
// import ListOfGifs from './components/listOfGifs'
import { Search } from './components/searchKeyword'


function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <Search/>
      </section>
    </div>
  )
}

export default App
