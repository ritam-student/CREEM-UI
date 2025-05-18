export default function ItemCard({box , title , price} : {box: string , title : string , price: string}) {
    return <div className="h-[400px] md:h-[500px]  w-full text-center cursor-pointer mb-5">
        <div id={`${box}`} className="h-[80%] border-[2px] border-black w-auto overflow-hidden bg-green-500 "></div>
        <h2 className="text-xl font-bold mt-3">{title}</h2>
        <p className="text-2xl font-bold mt-3 ">${price}</p>
    </div>
}