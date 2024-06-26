import Footer from "../components/Footer";
import GSlider from "../components/GSlider";
import Upload from "../components/Upload";
import { undangan } from "../components/Data";
import { Link } from "react-router-dom";


function Pesan(){
    return(
        <>
        <div className="border-2 p-10">
            <h1 className="text-center text-5xl p-3 font-mono font-bold">Pesan Kostum</h1>
            <div className="flex justify-center">
            <Link to="PesanKostum" type="button" class="text-white bg-navy hover:bg-gish focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-52 py-32 text-center me-2 mb-2"><h1 className="text-9xl">+</h1></Link>
            </div>
        </div>
        <div>
            <h1 className="text-center text-5xl p-3 font-mono font-bold">Atau Pesan Dari Gallery Kami</h1>
            <div className="flex justify-center">
                <GSlider images={undangan} />
            </div>
        </div>  
        <Footer/>
        </>
       
    );

}

export default Pesan;
