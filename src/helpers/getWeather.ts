
export const getWeather = async () => {

    const url = `http://api.weatherapi.com/v1/current.json?key=bd9d7723220348e1b8c212254240902&q=Peru`;

    const consulta = await fetch(url)

    const response = await consulta.json();

    console.log(response);
}

