
export default function Creemians ({main , sec} : {main: string , sec?: string}) {
    return <div className=" h-auto w-auto">
        <div className="w-full h-[550px] object-center object-cover overflow-hidden ">
            <img src="/creemians1.avif" alt="" className="w-full h-full"/>
        </div>
        <h1 className="font-comic text-3xl md:text-4xl my-8">{main}</h1>
        <h2 className="text-lg md:text-xl">{sec}</h2>
    </div>
}