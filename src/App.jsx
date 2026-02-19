import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Maincontent from './component/maincontent'
import Aboutus from './component/Aboutus'
import Contact from './component/contact'
import { UserContext } from './component/UserContext'
import Skill from './component/skill'
import Project from './component/myproject'
import Contactpage from './component/contactpage'
function App() {
  console.log(window.innerWidth, window.innerHeight);

  const [mode, setmode] = useState(false);

  return (
    <UserContext.Provider value={{ mode, setmode }}>
   
      <Navbar />

      {/* Add margin because navbar is fixed */}
      <div className="mt-[2px]">

        <div id="home" className="scroll-mt-20">
          <Maincontent />
        </div>

        <div id="about" className="scroll-mt-20">
          <Aboutus />
        </div>

        <div id="skills" className="scroll-mt-20">
          <Skill />
        </div>

        <div id="projects" className="scroll-mt-20">
          <Project />
        </div>

        <div id="contact" className="scroll-mt-20 flex items-center justify-center ">
          <Contactpage/>
        </div>

      </div>

    </UserContext.Provider>
  )
}

export default App
