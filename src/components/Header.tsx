
const Header = () => {
    return (
        <>
            <div className="flex justify-between text-white p-6 items-center px-60 ">
                <h1 className="text-sm"><p className="uppercase text-2xl inline-block">Weather</p> World</h1>
                <nav className="flex gap-4">
                    <ul>Weather</ul>
                    <ul>EN</ul>
                    <ul>ES</ul>
                </nav>
            </div>
            {/* <p>Find out the weather in your city</p> */}
        </>
    )
}

export default Header