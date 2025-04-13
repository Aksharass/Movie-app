import React from 'react'
import './App.css'
import {Header, Footer} from "./components";
import AllRoutes from './routes/AllRoutes';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>
    <Header/>
    <AllRoutes/>
    <Footer/>
     
    </>
  )
}

export default App
