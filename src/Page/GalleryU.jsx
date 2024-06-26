import Search from "../components/Search";
import GalleryC from "../components/GalleryC";
import CardSlide from "../components/GalleryC";
import { undanganC } from "../components/Data";

function GalleryU(){
    return(
    <>
    <div className="">
        <div className="p-10 text-center text-7xl ">
            <h1 className="font-mono font-bold">Gallery Undangan</h1>
        </div>
        <Search/>

        <div className="lg:ml-96 border-2 lg:w-3/4 md:w-full">
            <CardSlide images={undanganC}/>
        </div>

    </div>
    </>
    
    );
}

export default GalleryU;