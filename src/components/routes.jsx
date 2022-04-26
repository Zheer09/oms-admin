import React from 'react'

import { Routes ,Route } from 'react-router-dom'

import Dashboard from '../pages/dashboard'

const Routers = () => {
  return (
    <Routes>
        <Route exact  path='/'  element={<Dashboard/>} />
    </Routes>
  )
}

export default Routers