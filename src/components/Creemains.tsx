import Creemians from "./UI/Creemian";

export default function Creemains() {
    return <div className="bg-[#FB4451] w-full h-auto text-center py-8">
        <div className="w-auto  inline-block max-w-[500px] px-6 py-10">
            <h1 className="font-comic text-3xl md:text-4xl ">CREEMAINS</h1>
            <div className="my-6">
                <span className="text-lg md:text-[22px] font-semibold mt-10">Because we like ourselves a little too much, every now and again, we revisit pieces from the CREEM archive. Read free, no subscription required.</span>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 px-10 md:px-32 py-6">
            <Creemians main="I CONFRONTED METALLICA ON THEIR OWN TERMS!" sec="Why Metallica had to leave L.A. to make it big." />
            <Creemians main="David Bowie. Ever heard of him?" sec="" />
            <Creemians main="SURVIVE! How I Toured With THE DAMNED...And Lived" sec={`Saturday: ''This is why the Russians don't bother to steal British secrets."`} />
        </div>
    </div>
}