import { useState } from 'react';
import NavBar from './COMPONENTS/NavBar';
import Hero from './COMPONENTS/Hero';

function App() {

  return (
    <div className='m-o min-h-screen'
      style={{background: 'linear-gradient(to right, #dae2f8, #d6a4a4)'}}
    >
      <NavBar />
      <Hero />
    </div>
  )
}

export default App
