
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ContactInfo from './components/ContactInfo/ContactInfo'
import Footer from './components/Footer/footer'
import './App.css'
import Parent from './components/Parent/Parent'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



let routing = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contactInfo', element: <ContactInfo /> },
      { path: '*', element: <NotFound /> }
     
    ]
  }
])
function App() {


  return (
    <>

      <RouterProvider router={routing}></RouterProvider>


    </>
  )
}

export default App
