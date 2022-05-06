import React from 'react'

import './layout.css'

import { BrowserRouter } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routers from '../routes'

const Layout = () => {
  console.log()
  return (

    <BrowserRouter>
    
       <div className='layout'>
        
       <Sidebar/>
          <div className="layout__content">
          <TopNav/>
          <div className="layout__content-main">
        <Routers />
          </div>
        </div>
        </div>
    </BrowserRouter>
  )
}

export default Layout



