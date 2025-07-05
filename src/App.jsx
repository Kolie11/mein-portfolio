import './App.css'
import NavBar from './components/NavBar'
import About from './components/Pages/About'
import Blogs from './components/Pages/Blogs'
import Contact from './components/Pages/Contact'
import Home from './components/Pages/Home'
import Portfolios from './components/Pages/Portfolios'
import Resume from './components/Pages/Resume'
import SwitchBtn from './components/SwitchBtn'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>
    <SwitchBtn/>
    <BrowserRouter>

<NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/portfolios' element={<Portfolios/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>   
  
    </>
  )
}

export default App
