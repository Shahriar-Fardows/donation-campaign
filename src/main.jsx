import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Error from './Components/Error/Error.jsx';
import Home from './Components/Home/Home.jsx';
import Donetion from './Components/all-page/Donetion.jsx';
import Statistics from './Components/all-page/Statistics.jsx';
import DonationInfo from './Components/DonetionInfo/DonationInfo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element:<Home/> ,
        loader: () => fetch('../public/api.json'),
      },
      {
        path: "/donation",
        element:<Donetion/> ,
        loader: () => fetch('api.json'),
      },
      {
        path: "/Statistics",
        element:<Statistics/> ,
        loader: () => fetch('../public/api.json'),
      },
      {
        path: "/donationinfo/:id",
        element: <DonationInfo/> ,
        loader: () => fetch('api.json'),
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
