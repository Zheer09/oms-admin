import React from 'react'

import './layout.css'

import { BrowserRouter } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import Routers from '../routes'

const Layout = () => {
  return (

    <BrowserRouter>
       <div className='layout'>
       <Sidebar />
          <div className="layout__content">
          </div>
          <div className="layout__content-main">
            <Routers />
          </div>
        </div>
    </BrowserRouter>
  )
}

export default Layout



