import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

const App = () => {
  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>
    </Route>
  ))


  return (
    <RouterProvider router={MyRoute} />
  )
}

export default App