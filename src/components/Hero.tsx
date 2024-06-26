import { useEffect, useState } from "react"
import Formulario from "./Formulario"
import { getWeather } from "../helpers/getWeather";
import earth from '../assets/earth.mp4'
import Cards from "./Cards";
import { getVideo } from "../helpers/getVideo";
import { Fade } from "react-awesome-reveal";

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
    const [country, setCountry] = useState('',);
    const [pressure, setPressure] = useState('')

    const [video, setVideo] = useState('')

    const addCountry = (country: string) => {
        const lowerCase = country.toLowerCase()
        setNewCountry(lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1));
    }

    useEffect(() => {
        const obtenerDatos = async () => {
            const { horaFormateada, fechaFormateada, humidity, temp_c, wind_kph, icon, text, feelslike_c, pressure_mb, region, country } = await getWeather(newCountry);

            const videoURL = await getVideo(newCountry)
            console.log(videoURL);

            setHora(horaFormateada);
            setFecha(fechaFormateada);

            setHumidity(humidity)
            setTemp(temp_c)
            setWind(wind_kph)
            setIcon(icon)
            setText(text)
            setFeels(feelslike_c)
            setPressure(pressure_mb)
            setRegion(region)
            setCountry(country)

            setVideo(videoURL);
        }
        obtenerDatos();
    }, [newCountry])



    console.log(video);

    return (
        <>
            <div className="p-4 items-center px-60 flex justify-between">
                <div className="w-2/5">
                    <Fade cascade damping={0.6}>
                        <h3 className="text-3xl py-2  text-white">Current Time in {newCountry}</h3>
                        <h1 className="text-6xl py-2  text-white">{hora}</h1>
                        <p className="text-3xl py-2  text-white">{fecha}</p>
                    </Fade>
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
                <Cards wind={wind} humidity={humidity} temp={temp} icon={icon} text={text} feels={feels} pressure={pressure} region={region} country={country} video={video} />
            </div>

        </>
    )
}

export default Hero