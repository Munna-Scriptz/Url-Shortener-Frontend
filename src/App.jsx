import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify';
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import LayoutTwo from './layout/LayoutTwo';
import Dashboard from './pages/Dashboard';

const App = () => {
  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne />}>
        <Route index element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>

      <Route path='/' element={<LayoutTwo />}>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>
    </Route>
  ))


  return (
    <>
      <RouterProvider router={MyRoute} />
      <ToastContainer />
    </>
  )
}

export default App