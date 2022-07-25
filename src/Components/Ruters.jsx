import React from 'react'
import Tanec from "../Pagas/Tanec";
import Prepod from "../Pagas/Prepod";
import Abon from "../Pagas/Abon";
import Blog from "../Pagas/Blog";
import Contacts from "../Pagas/Contacts";
import { HashRouter as Rourer, Routes, Route } from "react-router-dom";

const Ruters = () => {
  return (
    <Rourer>
      <Routes>
        <Route exact path='/' element={<Tanec />} />
        <Route exact path='/prepod' element={<Prepod />} />
        <Route exact path='/abon' element={<Abon />} />
        <Route exact path='/contacts' element={<Contacts />} />
        <Route exact path='/blog' element={<Blog />} />
      </Routes>
    </Rourer>
  )
}

export default Ruters