import Upload from "../components/Upload";
import Form from "../components/Form";
import { Link } from "react-router-dom";


function PesanKostum(){
    return (
        <>

            <div className="bg-dblue">
                <h1 className="text-center text-5xl p-3 text-white font-semibold">Tambah Gambar Disini</h1>
                <div className="flex justify-center">
                    <Upload/>
                </div>

                <h1 className="text-center text-5xl p-12 text-white font-semibold">Tambahkan Detail Pesanan Disini</h1>
                <div className="flex justify-center">
                    <Form/>
                </div>

                <div className="flex justify-center p-10">
                    <Link to="Checkout" type="Link" class="text-white bg-teal hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-16 py-5 me-2 mb-2 dark:bg-teal dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Checkout</Link>
                </div>
            </div>
        </>
    );
}
export default PesanKostum;