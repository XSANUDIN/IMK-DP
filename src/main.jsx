import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Pesan from './Page/Pesan.jsx'
import NotFoundPage from './components/NotFoundPage.jsx';
import Gallery from './Page/Gallery.jsx';
import Gslider from './components/GSlider.jsx';
import Service from './Page/Service.jsx';
import Home from './Page/Home.jsx';
import GalleryU from './Page/GalleryU.jsx';
import GalleryC from './components/GalleryC.jsx';
import PesanKostum from './Page/PesanKostum.jsx';
import Checkout from './Page/Checkout.jsx';

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <App/>,
//     errorElement : <NotFoundPage/>
//   },
//   {
//     path : 'Pesan',
//     element : <Pesan/>
//   },
//   {
//     path : 'Pesan/PesanKostum',
//     element : <PesanKostum/>
//   },
//   {
//     path : 'Pesan/PesanKostum/Checkout',
//     element : <Checkout/>
//   },
//   {
//     path : 'Pesan/Gallery',
//     element : <Home/>
//   },
//   {
//     path : 'Service',
//     element : <Service/>
//   },
//   {
//     path : 'Gallery',
//     element : <Gallery/>
//   },
//   {
//     path : 'Gallery/GalleryU',
//     element : <GalleryU/>
//   },
//   {
//     path : 'GalleryU',
//     element : <GalleryU/>
//   },

// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <App/>
//     </RouterProvider>
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
