import Footer from "../components/Footer";
import GSlider from "../components/GSlider";
import { banner, stiker, undangan } from "../components/Data";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home(){
    return(
        <>
        <Header/>
        <div className="text-black md:p-10">
            <h1 className="font-bold font-mono text-8xl p-2 flex justify-center">Our Service</h1>
            {/* Undangan */}
            <div className="flex items-center justify-center p-2 md:p-5 rounded-2xl">
                <div className="bg-white-900 rounded-lg shadow-xl w-full md:w-11/12 lg:w-5/6 flex flex-col md:flex-row justify-end">
                    <div className="w-full md:w-2/2 lg:w-3/4">
                        <GSlider images={undangan} />
                    </div>
                    <div className="p-6 flex flex-col w-full md:w-1/2 lg:w-2/3">
                        <h2 className="text-center font-bold text-7xl md:text-7xl lg:text-7xl text-gray-800 hover:text-gray-700 mb-2">
                            Undangan
                        </h2>
                        <p className="max-w-full text-gray-700 mb-2 mt-6">
                            Kumpulan Undangan dengan berbagai Model dan Beragam Bahan
                        </p>
                        <div className="mt-10 md:mt-40 flex justify-center md:justify-end">
                            <Link to="GalleryU"className="ext-white shadow-md rounded-md py-2 px-4 bg-gish hover:bg-blue-400 hover:text-white transition duration-200">
                                Lebih Banyak
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        {/* Stiker */}
            <div className="flex items-center justify-center p-2 md:p-5">
                <div className="bg-white-900 rounded-lg shadow-xl w-full md:w-11/12 lg:w-5/6 flex flex-col md:flex-row justify-end">
                    <div className="w-full md:w-2/2 lg:w-3/4">
                        <GSlider images={stiker} />
                    </div>
                    <div className="p-6 flex flex-col w-full md:w-1/2 lg:w-2/3 ">
                        <h2 className="text-center font-bold text-7xl md:text-7xl lg:text-7xl hover:text-gray-700 mb-2 text-dblue">
                            Stiker
                        </h2>
                        <p className="max-w-full text-gray-700 mb-2 mt-6 text-dblue">
                            Kumpulan Stiker dengan berbagai Model dan Beragam Bahan
                        </p>
                        <div className="mt-10 md:mt-40 flex justify-center md:justify-end">
                            <Link to="GalleryU"className="ext-white shadow-md rounded-md py-2 px-4 bg-gish hover:bg-blue-400 hover:text-white transition duration-200">
                                Lebih Banyak
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        {/* Banner */}
            <div className="flex items-center justify-center p-2 md:p-5 rounded-2xl">
                <div className="bg-white-900 rounded-lg shadow-xl w-full md:w-11/12 lg:w-5/6 flex flex-col md:flex-row justify-end">
                    <div className="w-full md:w-2/2 lg:w-3/4">
                        <GSlider images={banner} />
                    </div>
                    <div className="p-6 flex flex-col w-full md:w-1/2 lg:w-2/3">
                        <h2 className="text-center font-bold text-7xl md:text-7xl lg:text-7xl text-gray-800 hover:text-gray-700 mb-2">
                            Banner
                        </h2>
                        <p className="max-w-full text-gray-700 mb-2 mt-6">
                            Kumpulan Banner dengan berbagai Model dan Beragam Bahan
                        </p>
                        <div className="mt-10 md:mt-40 flex justify-center md:justify-end">
                            <Link to="GalleryU"className="ext-white shadow-md rounded-md py-2 px-4 bg-gish hover:bg-blue-400 hover:text-white transition duration-200">
                                Lebih Banyak
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    );
}

export default Home;