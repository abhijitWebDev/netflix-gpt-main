import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import {AuthLayout , Login, Browse} from './components/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: "/login",
          element: (
              <AuthLayout authentication={false}>
                  <Login />
              </AuthLayout>
          ),
      },
      {
        path:'/browse',
        element:(
          <AuthLayout authentication>
            <Browse />
          </AuthLayout>
        )
      }
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)