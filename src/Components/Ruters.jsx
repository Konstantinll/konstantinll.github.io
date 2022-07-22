import React from 'react'
import Tanec from "../Pagas/Tanec";
import Prepod from "../Pagas/Prepod";
import Raspis from "../Pagas/Raspis";
import Blog from "../Pagas/Blog";
import Contacts from "../Pagas/Contacts";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const Ruters = () => {
  return (
        <Router>
          <Routes>
            <Route exact path='/' element={<Tanec />} />
            <Route exact path='/prepod' element={<Prepod />} />
            <Route exact path='/raspis' element={<Raspis />} />
            <Route exact path='/contacts' element={<Contacts />} />
            <Route exact path='/blog' element={<Blog />} />
          </Routes>
        </Router>
  )
}

export default Ruters