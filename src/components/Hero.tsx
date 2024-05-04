import { useState } from "react"
import Formulario from "./Formulario"
import { getWeather } from "../helpers/getWeather";
import earth from '../assets/earth.mp4'
import Main from "./Main";
import Cards from "./Cards";

const Hero = () => {

    const [newCountry, setNewCountry] = useState('Peru');
    const [hora, setHora] = useState('');
    const [fecha, setFecha] = useState('');

    const [humidity, setHumidity] = useState('');
    const [temp, setTemp] = useState('');
    const [wind, setWind] = useState('');
    const [icon, setIcon] = useState('');
    const [text, setText] = useState('');
    const [feels, setFeels] = useState('');
    const [region, setRegion] = useState('');
    const [country, setCountry] = useState('',)



    const addCountry = (country: string) => {
        setNewCountry(country.charAt(0).toUpperCase() + country.slice(1))
    }

     const obtenerDatos = async () => {
        const { horaFormateada, fechaFormateada, humidity, temp_c, wind_kph, icon, text, feelslike_c ,region,country} = await getWeather(newCountry);
        setHora(horaFormateada);
        setFecha(fechaFormateada);

        setHumidity(humidity)
        setTemp(temp_c)
        setWind(wind_kph)
        setIcon(icon)
        setText(text)
        setFeels(feelslike_c)
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
                    <Formulario addCountry={addCountry} />
                </div>
                <div>
                    <video src={earth} autoPlay loop muted className="h-96 ml-48" />
                </div>
            </div>
            <div className="px-60">
                <h1 className="text-3xl text-white pb-2">This is the weather in: {newCountry}</h1>
                <p className="text-base text-white py-4 w-2/3">Find out the weather in your city or country of choice in real time with our weather app for free at Weather World.</p>
                <Cards wind={wind} humidity={humidity} temp={temp} icon={icon} text={text} feels={feels} region={region} country={country}/>
            </div>

        </>
    )
}

export default Hero