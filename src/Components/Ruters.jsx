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
            <Route path='/' component={Tanec} />
            <Route path='/prepod' component={Prepod} />
            <Route path='/raspis' component={Raspis} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/blog' component={Blog} />
          </Routes>
        </Router>
  )
}

export default Ruters