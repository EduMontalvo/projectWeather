import { FC } from "react"
import ICards from "../interface/ICards"
import sunny from "../assets/sunny/weather-sunny.jpg";


import dropIcon from '../assets/icons/drop-svgrepo-com.svg'
import locationIcon from '../assets/icons/location-pin-svgrepo-com.svg'
import pressureIcon from '../assets/icons/pressure-svgrepo-com.svg'
import windIcon from '../assets/icons/wind-svgrepo-com.svg'


const Cards: FC<ICards> = ({ humidity, temp, wind, icon, text, feels, pressure, region, country, video }) => {

    return (
        <>
            <div className="grid grid-cols-7 grid-rows-3 gap-6 w-full my-4">
                
                <div className="bg-white rounded-3xl p-10 relative row-span-3 col-span-3">
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                        <img src={sunny} alt="" className="w-full h-full object-fit-cover brightness-100 contrast-125" />
                    </div>
                    <div className="relative z-10 text-white">
                        <h3 className="text-sky-600 mb-2 text-xl">Now</h3>
                        <h1 className="text-6xl mb-2">{temp}°C</h1>
                        <img className="mb-2" src={icon} alt="Icono del tiempo" />
                        <p className="font-medium mb-2  text-xl">{text}</p>
                        <p className="text-sky-600 inline-block pr-2 text-xl">Feels like</p>
                        <p className="font-medium inline-block text-xl"> {feels}</p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-10 col-span-2">
                    <h3 className="text-sky-600 text-2xl mb-2 font-semibold">Humidity</h3>
                    <div className="flex gap-2">
                        <img className="w-6 h-6" src={dropIcon} alt="" />
                        <p className="font-bold text-xl mb-2">{humidity} %</p>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-10 col-span-2">
                    <h3 className="text-sky-600 text-2xl mb-2 font-semibold">Wind</h3>
                    <div className="flex gap-2">
                        <img className="w-6 h-6" src={windIcon} alt="" />
                        <p className="font-bold text-xl mb-2">{wind} m/s</p>
                    </div>

                </div>
                <div className="bg-white rounded-3xl p-10 col-span-2">
                    <h3 className="text-sky-600 text-2xl mb-2 font-semibold">Location</h3>
                    <div className="flex gap-2">
                        <img className="w-6 h-6" src={locationIcon} alt="" />
                        <p className="font-bold text-xl mb-2">{region},{country}</p>
                    </div>

                </div>
                <div className="bg-white rounded-3xl p-10 col-span-2">
                    <h3 className="text-sky-600 text-2xl mb-2 font-semibold">Pressure</h3>
                    <div className="flex gap-2">
                        <img className="w-6 h-6" src={pressureIcon} alt="" />
                        <p className="font-bold text-xl mb-2">{pressure} mm</p>
                    </div>

                </div>
            </div>
            <h1 className="text-3xl my-12 text-white">Forecast</h1>
            <div className="grid grid-cols-5 gap-4  w-full">
                <div className="bg-white rounded-3xl p-6 col-span-1 row-span-4">
                    <h1 className="text-5xl mb-2">Mon</h1>
                    <h3 className="text-sky-600 mb-2">Today</h3>
                    <img className="mb-2" src={icon} alt="Icono del tiempo" />
                    <p className="font-medium mb-2">{wind}</p>
                    <p className="text-sky-600 inline-block pr-2">{feels}</p>
                </div>
                <div className="bg-white rounded-3xl p-6 col-span-1 row-span-4">
                    <h1 className="text-5xl mb-2">Tue</h1>
                    <h3 className="text-sky-600 mb-2">Today</h3>
                    <img className="mb-2" src={icon} alt="Icono del tiempo" />
                    <p className="font-medium mb-2">{wind}</p>
                    <p className="text-sky-600 inline-block pr-2">{feels}</p>
                </div>
                <div className="bg-white rounded-3xl p-6 col-span-1 row-span-4">
                    <h1 className="text-5xl mb-2">Wed</h1>
                    <h3 className="text-sky-600 mb-2">Today</h3>
                    <img className="mb-2" src={icon} alt="Icono del tiempo" />
                    <p className="font-medium mb-2">{wind}</p>
                    <p className="text-sky-600 inline-block pr-2">{feels}</p>
                </div>
                <div className="bg-white rounded-3xl p-6 col-span-1 row-span-4">
                    <h1 className="text-5xl mb-2">Thue</h1>
                    <h3 className="text-sky-600 mb-2">Today</h3>
                    <img className="mb-2" src={icon} alt="Icono del tiempo" />
                    <p className="font-medium mb-2">{wind}</p>
                    <p className="text-sky-600 inline-block pr-2">{feels}</p>
                </div>
                <div className="bg-white rounded-3xl p-6 col-span-1 row-span-4">
                    <h1 className="text-5xl mb-2">Fri</h1>
                    <h3 className="text-sky-600 mb-2">Today</h3>
                    <img className="mb-2" src={icon} alt="Icono del tiempo" />
                    <p className="font-medium mb-2">{wind}</p>
                    <p className="text-sky-600 inline-block pr-2">{feels}</p>
                </div>
            </div>
            <div className="py-9">
                <video src={video} autoPlay loop muted playsInline className="video-player" />
            </div >
        </>


    )
}

export default Cards