import Search from "../components/Search";
import GalleryC from "../components/GalleryC";
import { bannerC } from "../components/Data";

function GalleryB(){
    return(
    <>
    <div className="">
        <div className="p-10 text-center text-7xl ">
            <h1 className="font-mono font-bold">Gallery Banner</h1>
        </div>
        <Search/>

        <div className="lg:ml-96 border-2 lg:w-3/4 md:w-full">
            <GalleryC images={bannerC}/>
        </div>

    </div>
    </>
    
    );
}

export default GalleryB;