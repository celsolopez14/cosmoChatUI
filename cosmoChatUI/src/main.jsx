import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { WelcomePage } from './pages/WelcomePage/WelcomePage.jsx';
import { ChattingPage } from './pages/ChattingPage/ChattingPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage/>,
  },
  {
    path: "/ChattingPage",
    element: <ChattingPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
