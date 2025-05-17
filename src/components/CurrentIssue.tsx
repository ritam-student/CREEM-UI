export default function CurrentIssue(){
    return <div className="w-full h-auto border-t-2 border-black">
        <div className="mx-auto container px-4 py-16 flex items-center justify-between flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-red-400 flex items-center justify-center py-4 h-[200px]">
                            image
            </div>

            <div className="w-full md:w-1/2 bg-green-400 flex items-center justify-center flex-col py-4">
                <p className="font-extrabold text-black tracking-tighter"><u>CURRENT ISSUE</u></p>
                <h2 className="mt-4 text-6xl font-anton font-medium tracking-wide">CREEM #11</h2>
                <p className="mt-4 font-normal tracking-wide text-xl">Just play the hits!</p>
                <p className="mt-8 text-2xl">Here's <u>what's inside</u>.</p>
                <button className="mt-20 font-[900] font-serif text-lg md:text-2xl bg-black text-white border-[2px] border-black mt-100 hover:bg-white hover:text-black transition-all px-4 py-3">Subscribe</button>
            </div>
        </div>
    </div>
}