import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './Counter.jsx'
import App from './App.jsx'
import ControlledComponent from './ControlledComponent.jsx'
import UncontrolledComponent from './UncontrolledComponent.jsx'
import EventHandlers from './EventHandlers.jsx'
import Home from './Marketplace/Home.jsx'
import Navbar from './Marketplace/Navbar.jsx'
import Footer from './Marketplace/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    {/* <Counter /> */}
    {/* <App /> */}
    {/* <ControlledComponent /> */}
    {/* <UncontrolledComponent /> */}
    {/* <EventHandlers /> */}
    <Home />
    <Footer />
  </StrictMode>,
)
