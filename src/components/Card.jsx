

function Card(){
    const cardData = [
        {
            gambar : 'https://blog.hubspot.com/hs-fs/hubfs/Update%20css%20margin%20vs%20padding-5%20.webp?width=650&height=470&name=Update%20css%20margin%20vs%20padding-5%20.webp',
            title :'STICKER',
            deskripsi : 'cx'
        },
        {
            gambar : 'https://blog.hubspot.com/hs-fs/hubfs/Update%20css%20margin%20vs%20padding-5%20.webp?width=650&height=470&name=Update%20css%20margin%20vs%20padding-5%20.webp',
            title :'UNDANGAN',
            deskripsi : 'czx'
        },
        {
            gambar : 'https://i.ytimg.com/vi/YOb67OKw62s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDqCuWpVF5KJHde0awV2t_UjRKRgg',
            title :'BANNER',
            deskripsi : 'czx'
        },
    ];


    const Card = ({gambar, title, deskripsi}) => {
        return(
                <div className="max-w-sm bg-white border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={gambar} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{deskripsi}</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
        );
    };

    return(
        <div className="p-20 bg-gray">
            <h1 className="mb-20 text-5xl font-bold text-white text-center">Layanan Kami</h1>
            <div className="flex justify-between">
                {cardData.map((card, index) => (
                    <Card key={index} gambar={card.gambar} title={card.title} deskripsi={card.deskripsi} />
                ))}
            </div>
        </div>
    )
};

export default Card;