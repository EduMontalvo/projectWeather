import { FC } from "react"
import ICards from "../interface/ICards"

const Cards: FC<ICards> = ({ temp, icon, text, feels }) => {
    return (
        <div className="bg-white rounded-lg p-10">
            <h3 className="text-sky-600">Now</h3>
            <h1 className="text-5xl inline-block">{temp}</h1>
            <img src={icon} alt="Icono del tiempo" />
            <p className="font-medium">{text}</p>
            <p className="text-sky-600">Feels like</p><p className="font-medium"> {feels}</p>
        </div>
    )
}

export default Cards