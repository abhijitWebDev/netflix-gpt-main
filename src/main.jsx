import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import {AuthLayout , Login, Browse} from './components/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'


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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </QueryClientProvider>
  // </React.StrictMode>,
)
