
import './App.css'
import './bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'
import { useContext } from 'react'
import { authContext } from './contextApi/ContextApi'

function App() {

  const { authStatus } = useContext(authContext)

  return (
    <>


      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/dash' element={authStatus ? <Dashboard /> : <Auth />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/allProjects' element={authStatus ? <Projects /> : <Auth />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
