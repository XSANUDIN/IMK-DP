
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './Page/Home'
import Gallery from './Page/Gallery'
import GalleryU from './Page/GalleryU'
import Checkout from './Page/Checkout'
import Pesan from './Page/Pesan'
import PesanKostum from './Page/PesanKostum'
import Service from './Page/Service'
import TopNav from "./components/TopNav";
import GalleryB from './Page/GalleryB'
import GalleryS from './Page/GalleryS'

function App() {
  const nav = {
    image: "",
  };
  return (
    <>
      <div>
        <BrowserRouter>
          <TopNav nav={nav}/>
          <Routes>
            <Route index element = {<Home/>}/>
            <Route path="/Home" element = {<Home/>}/>
            <Route path="/Home/Pesan" element = {<Pesan/>}/>
            <Route path="/Home/GalleryU" element = {<GalleryU/>}/>
            <Route path="/Home/Gallerys" element = {<GalleryS/>}/>
            <Route path="/Home/GalleryB" element = {<GalleryB/>}/>
            <Route path="/Gallery" element = {<Gallery/>}/>
            <Route path="/Gallery/GalleryU" element = {<GalleryU/>}/>
            <Route path="/Gallery/GalleryS" element = {<GalleryS/>}/>
            <Route path="/Gallery/GalleryB" element = {<GalleryB/>}/>
            <Route path="/Checkout" element = {<Checkout/>}/>
            <Route path="/Pesan" element = {<Pesan/>}/>
            <Route path="/Pesan/PesanKostum" element = {<PesanKostum/>}/>
            <Route path="/Pesan/PesanKostum/Checkout" element = {<Checkout/>}/>
            <Route path="/Service" element = {<Service/>}/>
          </Routes>
        </BrowserRouter>
      </div>
     
    </>
  );
}

export default App
