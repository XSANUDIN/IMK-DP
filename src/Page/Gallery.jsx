import Search from "../components/Search";
import GSlider from "../components/GSlider";
import CardSlide from "../components/CardSlide";
import Footer from "../components/Footer";

import { galleryB, galleryC, galleryS, undangan } from "../components/Data";
import { stiker } from "../components/Data";
import { banner } from "../components/Data";
import { Link } from "react-router-dom";

function Gallery(){
    return(
    <>
        <div className="p-10 text-center text-7xl ">
            <h1 className="font-mono font-bold">Gallery</h1>
        </div>
        <Search/>
        <div className="p-5"/>
        <div className="grid grid-cols-1 gap-4 lg:gap-0 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <CardSlide images={galleryC} link="GalleryU"/>
            <CardSlide images={galleryB} link="GalleryB"/>
            <CardSlide images={galleryS} link="GalleryS"/>
        </div>
        <Footer/>
    </>
    
    );
}

export default Gallery;