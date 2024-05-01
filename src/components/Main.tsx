import cloudy from "../assets/cloudy/weather-cloudy.jpg";
import sunny from "../assets/sunny/weather-sunny.jpg";
import foggy from "../assets/foggy/weather-foggy.jpg";
import storm from "../assets/storm/storm.jpg";

const Main = () => {
    return (
        <>
            {/* <div className="p-4 items-center px-60">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499488.9826921768!2d-77.31746981305017!3d-12.025773213805909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1707439316969!5m2!1ses-419!2spe" width="800" height="300" loading="lazy"></iframe>
            </div> */}
            <div className="p-4 items-center px-60">
                <h1 className="text-3xl text-white pb-2">This is the weather in: </h1>
                <p className="text-base text-white py-4 w-2/3">Find out the weather in your city or country of choice in real time with our weather app for free at Weather World.</p>
                <div className="flex gap-2">
                    <img className="w-1/4 object-cover filter brightness-125 " src={cloudy} alt="" />
                    <img className="w-1/4 object-cover filter brightness-125" src={sunny} alt="" />
                    <img className="w-1/4 object-cover filter brightness-125" src={foggy} alt="" />
                    <img className="w-1/4 object-cover filter brightness-125" src={storm} alt="" />
                </div>
            </div>
        </>
    )
}

export default Main