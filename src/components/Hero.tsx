import { useState } from "react"
import Formulario from "./Formulario"
import { getWeather } from "../helpers/getWeather";
import { formatearFecha } from "../helpers/formatearFecha";

const Hero = () => {

    const [newCountry, setNewCountry] = useState(['']);

    const addCountry = ( country: string ) => {
        setNewCountry([country])
    }
    getWeather();
    formatearFecha('2024-04-16 00:35');

    return (
        <div className="p-4 items-center px-60 flex justify-between">
            <div className="w-1/3">
                <h3 className="text-3xl py-2  text-white">Current Time in {newCountry}</h3>
                <h1 className="text-6xl py-2  text-white">01:03 am</h1>
                <p className="text-3xl py-2  text-white">Thursday 08 february 2024</p>
                <p className="text-base py-2 text-white">Find out the weather in your city or country of choice in real time with our weather app for free at Weather World.</p>
                {/* <form className="py-8 flex gap-6 " action="">
                    <input type="text" placeholder="Search..." value={valor} onChange={event => valorCambiante(event)} className="w-full rounded-xl py-2 px-4"/>
                    <button className="bg-white text-black rounded-xl px-3 py-2 ">Search</button>
                </form> */}
                <Formulario addCountry = {addCountry} />
            </div> 
            <img className="w-1/3" src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    )
}

export default Hero