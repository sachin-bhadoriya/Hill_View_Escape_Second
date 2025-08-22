import React from 'react'
import NavbarContainer from './Components/NavbarContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./screens/ContactDetails"
import SubscribeDetails from "./screens/SubscribeDetails"

const App = () => {
  return (
    <Router>
      <NavbarContainer />
      <Routes>
        <Route path='contact' element={<ContactDetails />} />
        <Route path='subscribe' element={<SubscribeDetails />} />

      </Routes>

    </Router>
  )
}

export default App