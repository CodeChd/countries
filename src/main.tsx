import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createRoutesFromElements, Route, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./views/Home/Home.tsx";
import Details from "./views/Details";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<App/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/country/details/:id" element={<Details/>}/>
        </Route>

    )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
