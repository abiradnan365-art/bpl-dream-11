
import  bgShadow from "../assets/bg-shadow.png"
import bannerMain from "../assets/banner-main.png"

function Banner() {
    return (
        <div className="container mx-auto px-4 mt-6">
            <div className="relative w-5xl h-90 mx-auto  bg-cover bg-black bg-center rounded-2xl overflow-hidden"
    style={{ backgroundImage: `url(${bgShadow})` }}>
        <div className="flex justify-center flex-col items-center">
            <img className="w-36 mt-4" src={bannerMain} alt="" />
            <h1 className="text-2xl md:text-3xl mt-5 text-white ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-1xl mt-4 text-gray-400">Beyond Boundaries Beyond Limits</p>
            <button className="bg-lime-500 p-3 font-bold mt-5 rounded-2xl hover:bg-lime-600 cursor-pointer border-2 border-black">Claim Free Credit</button>
        </div>
        
        </div>
        </div>
    );
}

export default Banner;