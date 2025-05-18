
export default function NewsLetter() {
    return <div className="py-16 bg-[#EBEBEB] min-h-[20vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-[400px]  ">
            <h1 className="text-4xl md:text-5xl font-comic my-5">NEWSLETTER</h1>
            <h3 className="text-lg md:text-xl">What we’re listening to and other musings. For free.</h3>
        </div>
        <div className="mt-10 flex items-center justify-center pb-8">
            <input type="text" placeholder="bark@themoon.com" className="px-4 py-3  w-[300px] md:w-[500px] border-2 border-gray-400" />
            <div className="px-3 py-2 text-lg md:text-xl font-extrabold border-2 border-black hover:text-white hover:bg-black cursor-pointer">SIGN ME UP</div>
        </div>
    </div>
}