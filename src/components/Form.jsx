
function Form(){
    return (
        <>
        <form action="/test" method="POST" className="w-1/3 bg-gish mx-auto border border-gray-400 p-10">
            <div>
            <label for="Nama" className="block mb-3">Nama</label>
            <input name="name" id="name" required className="p-2 mb-3 border border-gray-400 border-solid w-full"/>
            </div>
            <div>
            <label for="Nomor Hp" className="block mb-3">Nomor Yang Bisa Dihubungi</label>
            <input type="phone" name="email" id="email" required className="p-2 mb-3 border border-gray-400 w-full"/>
            </div>
            <div>
            <label for="about" className="block mb-3">Detail Pesanan</label>
            <textarea name="about" id="about" rows="10" placeholder="Masukkan detail pesanan seperti ukuran, jumlah, bahan..." className="p-2 mb-3 border border-gray-400 w-full"></textarea>
            </div>
            <div className="text-center">
            <button type="submit" className="py-3 text-white bg-dblue rounded-lg px-10">Save</button>
            </div>
        </form>


        </>
    );
}
export default Form;