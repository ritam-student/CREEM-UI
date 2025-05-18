export default function Hero(){

    return <div className="min-h-screen w-full pt-32  bg-[#ECC302]">
        <div className=" w-full h-full  relative flex items-center justify-center overflow-hidden">
            <img src="/image.png" alt="CReem"  className=" 2xl:scale-x-[128%] m2xl:scale-x-[125%] xl:scale-x-[108%] ml:scale-x-[115%] mxl:scale-x-[122%] lg:scale-x-[105%]"/>
        </div>
        <div className="w-full h-auto container mx-auto px-12 py-28  flex flex-col md:flex-row items-center justify-between space-y-4">
            <div className="md:w-1/2 w-full flex items-center justify-center">
                <img src="/BooksImage.png" alt="BooksImg" className="bg-transparent md:scale-105 lg:scale-110" />
            </div>
            <div className="md:w-1/2 w-full h-auto ">
                <div className="h-auto w-full  px-2 flex flex-col items-center justify-center ">
                    <h1 className="mt-2 flex font-comic  items-center justify-center text-4xl tracking-wider lg:text-6xl px-6 md:px-10 lg:18  flex-wrap  text-center w-[80%] ">AMERICA'S ONLY ROCK 'N' ROLL MAGAZINE</h1>
                    <p className="mt-6 flex items-center justify-center flex-wrap text-xl lg:text-2xl tracking-wider px-2  leading-[140%] md:leading-[180%] lg:leading-[200%] text-center space-y-10 ">Founded in 1969 and relaunched in 2022 as a premium print quarterly, CREEM is produced by a small and fiercely-independent team of writers, editors, and rabble rousers, who are all united by a simple belief: rock isn't dead, and neither is print.</p>
                    <button className="mt-20  text-lg md:text-2xl hover:bg-black hover:text-white  hover:border-white  mt-100 bg-white text-black transition-all px-4 py-3 font-[900] border-2 border-black font-sans ">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </div>
}