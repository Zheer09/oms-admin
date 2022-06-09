import React from 'react'

import { Routes ,Route } from 'react-router-dom'

import Dashboard from '../pages/dashboard'
import Forms from '../pages/forms'
import CTacc from '../pages/citizens'
import MTacc from '../pages/maintainer'
import SingleForm from '../pages/singleForm'

const Routers = () => {
  return (
    <Routes>
        <Route exact  path='/'  element={<Dashboard/>} />
        <Route exact  path='/forms'  element={<Forms/>} />
        <Route exact  path='/Citizens'  element={<CTacc/>} />
        <Route exact  path='/maintainers'  element={<MTacc/>} />
        <Route exact  path='/singleForm'  element={<SingleForm/>} />
    </Routes>
  )
}

export default Routers