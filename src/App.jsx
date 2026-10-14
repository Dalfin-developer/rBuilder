import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Download from './pages/Download'
import Info from './pages/Info'
import Saved from './pages/Saved'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  //pages: Homepage,Resume,UserInfo,ViewResume,All saved resume,Download resume,Page Not Found
  //Components : Header,Footer,Userinfo,Preview,Edit resume

  return (
    <>
    
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/resume-details' element={<Info/>} />
        <Route path='/all-resumes' element={<Saved/>} />
        <Route path='/resume/:id' element={<View/>} />
        <Route path='/downloads' element={<Download/>} />
        <Route path='/*' element={<Pnf/>} />

      </Routes>   
      <Footer/>
    </>
  )
}

export default App
