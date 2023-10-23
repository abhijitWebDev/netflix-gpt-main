import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'

const Body = () => {

    const appRouter = createBrowserRouter([
        {path: '/', element: <Login />},
        {path: '/browse', element: <Browse />},
    ])
  return (
    <>
    
    <RouterProvider router={appRouter}>
        
    </RouterProvider>
    </>
  )
}

export default Body