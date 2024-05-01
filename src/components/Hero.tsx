import { useState } from "react"
import Formulario from "./Formulario"
import { getWeather } from "../helpers/getWeather";
import earth from '../assets/earth.mp4'
import Main from "./Main";

const Hero = () => {

    const [newCountry, setNewCountry] = useState('Peru');
    const [hora, setHora] = useState('');
    const [fecha, setFecha] = useState('');

    /* humidity,
        temp_c,
        wind_kph,
        icon,
        text */

    const [humidity, setHumidity] = useState('');
    const [temp, setTemp] = useState('');
    const [wind, setWind] = useState('');
    const [icon, setIcon] = useState('');
    const [text, setText] = useState('');



    const addCountry = (country: string) => {
        setNewCountry(country.charAt(0).toUpperCase() + country.slice(1))
    }

    const obtenerDatos = async () => {
        const { horaFormateada, fechaFormateada, humidity, temp_c, wind_kph, icon, text } = await getWeather(newCountry);
        setHora(horaFormateada);
        setFecha(fechaFormateada);

        setHumidity(humidity)
        setTemp(temp_c)
        setWind(wind_kph)
        setIcon(icon)
        setText(text)
    }

    obtenerDatos();


    return (
        <>
            <div className="p-4 items-center px-60 flex justify-between">
                <div className="w-2/5">
                    <h3 className="text-3xl py-2  text-white">Current Time in {newCountry}</h3>
                    <h1 className="text-6xl py-2  text-white">{hora}</h1>
                    <p className="text-3xl py-2  text-white">{fecha}</p>
                    <p className="text-base py-2 text-white">Find out the weather in your city or country of choice in real time with our weather app for free at Weather World.</p>
                    {/* <form className="py-8 flex gap-6 " action="">
                    <input type="text" placeholder="Search..." value={valor} onChange={event => valorCambiante(event)} className="w-full rounded-xl py-2 px-4"/>
                    <button className="bg-white text-black rounded-xl px-3 py-2 ">Search</button>
                </form> */}
                    <Formulario addCountry={addCountry} />
                </div>
                {/* <img className="w-1/3" src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                <div>
                    <video src={earth} autoPlay loop muted className="h-96 ml-48" />
                </div>
            </div>
            <div className="text-white">
                <p>La humedad es de: {humidity} %</p>
                <p>La temperatura es de: {temp} C</p>
                <p>El viento es de: {wind} km/h</p>
                <p>El pronostico es de: {text}</p>
                <img src={icon} alt="icono" />
            </div>
            {/* <Main obtenerDatos = {obtenerDatos}/> */}
        </>
    )
}

export default Hero