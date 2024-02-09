
const Main = () => {
    return (
        <>
            <div className="p-4 items-center px-60">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499488.9826921768!2d-77.31746981305017!3d-12.025773213805909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1707439316969!5m2!1ses-419!2spe" width="1400" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="p-4 items-center px-60">
                <h1 className="text-3xl text-white">Country</h1>
                <div className="">
                    <img src="../assets/cloudy/weather-cloudy.jpg" alt="" />
                    <img src="../assets/foggy/weather-foggy.jpg" alt="" />
                    <img src="../assets/sunny/weather-sunny.jpg" alt="" />
                    <img src="../assets/rainy/weather-rainy.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Main