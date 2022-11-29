import { BrowserRouter, Routes, Route} from 'react-router-dom'


import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Developers from './pages/developers/Developers.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Registrar from './pages/register/Registrar.jsx'
import LogIn from './pages/login/LogIn.jsx'
import UserDetails from './pages/login/userDetails.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='developers' element={<Developers />} />
        <Route path='contact' element={<Contact />} />
        <Route path='registrar' element={<Registrar />} />
        <Route path='log-in' element={<LogIn />} />
        <Route path='userDetails' element={<UserDetails />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App