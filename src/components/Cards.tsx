import { FC } from "react"
import ICards from "../interface/ICards"

const Cards: FC<ICards> = ({ humidity, temp, wind, icon, text, feels, region, country }) => {
    return (
        <div className="grid grid-cols-4 gap-4  w-full">
            <div className="bg-white rounded-3xl p-10 col-span-3">
                <h3 className="text-sky-600 mb-2">Now</h3>
                <h1 className="text-5xl mb-2">{temp}°C</h1>
                <img className="mb-2" src={icon} alt="Icono del tiempo" />
                <p className="font-medium mb-2">{text}</p>
                <p className="text-sky-600 inline-block pr-2">Feels like</p><p className="font-medium inline-block"> {feels}</p>
            </div>
            <div className="bg-white rounded-3xl p-10 col-span-1">
                <h3 className="text-sky-600 mb-2">Now</h3>
                <h1 className="text-5xl mb-2">{temp}°C</h1>
                <img className="mb-2" src={icon} alt="Icono del tiempo" />
                <p className="font-medium mb-2">{text}</p>
                <p className="text-sky-600 inline-block pr-2">Feels like</p><p className="font-medium inline-block"> {feels}</p>
            </div>
            <div className="bg-white rounded-3xl p-10 col-span-1 row-span-1/2">
                <h3 className="text-sky-600 mb-2 font-semibold">Humidity</h3>
                <p className="font-bold mb-2">{humidity}</p>
            </div>
            <div className="bg-white rounded-3xl p-10 col-span-1 row-span-1/2">
                <h3 className="text-sky-600 mb-2 font-semibold">Wind</h3>
                <p className="font-bold mb-2">{wind}</p>
            </div>
            <div className="bg-white rounded-3xl p-10 col-span-1 row-span-1/2">
                <h3 className="text-sky-600 mb-2 font-semibold">Location</h3>
                <p className="font-bold mb-2">{region},{country}</p>
            </div>
            <div className="bg-white rounded-3xl p-10 col-span-1 row-span-1/2">
                <h3 className="text-sky-600 mb-2 font-semibold">Humidity</h3>
                <p className="font-bold mb-2">{humidity}</p>
            </div>

        </div>
    )
}

export default Cards