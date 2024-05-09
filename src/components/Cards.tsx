import { FC } from "react"
import ICards from "../interface/ICards"
import sunny from "../assets/sunny/weather-sunny.jpg";
import { Fade } from "react-awesome-reveal";


const Cards: FC<ICards> = ({ humidity, temp, wind, icon, text, feels, pressure, region, country, imagen, video }) => {

    return (
        <>
            <div className="grid grid-cols-3 gap-6 w-full my-4">
                <Fade></Fade>
                <div className="bg-white rounded-3xl p-10 row-span-6 relative ">
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                        <img src={sunny} alt="" className="w-full h-full object-fit-cover brightness-100 contrast-125" />
                    </div>
                    <div className="relative z-10 text-white">
                        <h3 className="text-sky-600 mb-2">Now</h3>
                        <h1 className="text-5xl mb-2">{temp}°C</h1>
                        <img className="mb-2" src={icon} alt="Icono del tiempo" />
                        <p className="font-medium mb-2">{text}</p>
                        <p className="text-sky-600 inline-block pr-2">Feels like</p><p className="font-medium inline-block"> {feels}</p>
                    </div>
                </div>
                {/* <div className=" rounded-3xl col-span-1">
                    <img src={sunny} alt="" className="w-full h-full object-cover rounded-3xl p-2 brightness-100 contrast-125"></img>
                </div> */}
                <div className="bg-white rounded-3xl p-10 row-span-5 ">
                    <h3 className="text-sky-600 mb-2 font-semibold">Humidity</h3>
                    <p className="font-bold mb-2">{humidity} %</p>
                </div>
                <div className="bg-white rounded-3xl p-10 row-span-1  ">
                    <h3 className="text-sky-600 mb-2 font-semibold">Wind</h3>
                    <p className="font-bold mb-2">{wind} m/s</p>
                </div>
                <div className="bg-white rounded-3xl p-10 row-span-5  ">
                    <h3 className="text-sky-600 mb-2 font-semibold">Location</h3>
                    <p className="font-bold mb-2">{region},{country}</p>
                </div>
                <div className="bg-white rounded-3xl p-10 row-span-1  ">
                    <h3 className="text-sky-600 mb-2 font-semibold">Pressure</h3>
                    <p className="font-bold mb-2">{pressure} mm</p>
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