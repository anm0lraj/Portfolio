import React from 'react'

import { About, Footer, Header, Skills, Work, Designs, Education, Roles, Achievements, Certificates} from './container';
import { Navbar } from './components';
import './App.scss';


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Education/>
      <Skills/>
      <Roles/>
      <Work/>
      <Designs/>
      <Achievements/>
      <Certificates/>
      <Footer/>
    </div>
  )
}

export default App