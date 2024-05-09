import { formatearFecha } from "./formatearFecha";

export const getWeather = async (newCountry:string) => {

    const url = `http://api.weatherapi.com/v1/current.json?key=bd9d7723220348e1b8c212254240902&q=${newCountry}&lang=es`;

    const consulta = await fetch(url)

    const response = await consulta.json();

    /* console.log(response); */

    const {horaFormateada,fechaFormateada} = formatearFecha(response.location.localtime)
    
    const {humidity,temp_c,wind_kph,feelslike_c,pressure_mb} = response.current
    
    const {icon,text} = response.current.condition

    const {region,country} = response.location

    console.log(newCountry);

    return {
        horaFormateada,
        fechaFormateada,
        humidity,
        temp_c,
        wind_kph,
        icon,
        text ,
        feelslike_c,
        pressure_mb,
        region,
        country
    }
    
}

