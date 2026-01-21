import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Introduction from './pages/Introduction'
import Experience from './pages/Experience'
import Academic from './pages/Academic'
import Project from './pages/Project'
import Boat from './projectpages/Boat'
import Angelhunter from './projectpages/Angelhunter'
import Ememotics from './projectpages/Ememotics'
import Kurafuto from './projectpages/Kurafuto'
import Punch from './projectpages/Punch'
import Threads from './projectpages/Threads'

function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path = "/introduction" element = {<Introduction/>}/>
        <Route path = "/experience" element = {<Experience/>}/>
        <Route path = "/academic" element = {<Academic/>}/>
        <Route path = "/project" element = {<Project/>}/>
        <Route path = "/boat" element = {<Boat/>}/>
        <Route path = "/angelhunter" element = {<Angelhunter/>}/>
        <Route path = "/ememotics" element = {<Ememotics/>}/>
        <Route path = "/kurafuto" element = {<Kurafuto/>}/>
        <Route path = "/punch" element = {<Punch/>}/>
        <Route path = "/threads" element = {<Threads/>}/>
      </Routes>
    </Router>
  )

}

export default App
