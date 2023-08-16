import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact'
import NavbarNav from './components/NavbarNav'
import Footer from './components/Footer'


import './App.css'

function App() {

  return (
    <>
      <Container>
        <Router>
          <NavbarNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/company' element={<Company />} />
            <Route path='/newproject' element={<NewProject />} />
            <Route path='/project/:id' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </>
  )
}

export default App
