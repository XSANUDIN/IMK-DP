import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return(
        <div className="bg-gray-200 text-center pt-60 text-4xl font-bold">
            <h1 className="text-9xl p-5">404</h1>
            <h3 className="p-2">Halaman Tidak Ditemukan</h3>
            <p className="font-light">Kembali Ke <Link to="/" className="text-blue-600">Halaman Utama</Link></p>
        </div>
    );
}