import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, RouterProvider, createBrowserRouter  } from 'react-router-dom'; 
// import Show from './components/Show/Show';
// // import Main from './components/Main/Main';
// import Home from './components/Home/Home';

// const router  = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>,
//     // loader: rootLoader,
//     children: [
//       {
//         path:"show",
//         element:<Show />,
//         // loader: teamLoader,
//       }
//     ]
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);


