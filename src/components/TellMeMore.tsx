
export default function TellMore() {
    return <div className="min-h-[100vh] h-auto w-full bg-black text-white px-6 sm:px-10 md:px-14 lg:px-24 py-10 ">
        <div className="h-[70vh] md:h-[105vh] w-full bg-red-400 object-center object-cover overflow-hidden">
            <img src="/img2.jpg" alt="image2" className="h-full w-full" />
        </div>
        <div className="h-auto w-full  flex flex-col md:flex-row items-center justify-around gap-10 md:gap-16 py-10 ">
            <div className="text-center">
                <h3 className="font-comic text-center text-4xl">Limited</h3>
                <p className="text-xl mt-5">CREEM is printed in small batches and generally not available on newsstands. Get it here, or not at all.</p>
            </div>
            <div className="text-center">
                <h3 className="font-comic text-center text-4xl">144+ Pages</h3>
                <p className="text-xl mt-5">Original stories, full page photography, new music, comics, and over 50,000 words in each issue.</p>
            </div>
            <div className="text-center">
                <h3 className="font-comic text-center text-4xl">Collectible</h3>
                <p className="text-xl mt-5">Nice enough for the coffee table, but happiest on the back of the toilet, where you do all your reading anyway.</p>
            </div>
        </div>
    </div>
}