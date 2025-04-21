import { Link } from "react-router-dom"
import "./card.css"

const Card = ({ data }) => {
    const { common } = data.name;
    const { svg, alt } = data.flags;
    const { population } = data;
    const { region } = data;
    const capital = data.capital;

    return(
        <Link to={`/country/${common}`} className="card-container">
            <figure>
                <img src={svg} alt={alt} />
            </figure>
            <section className="card-data">
                <h3>{common}</h3>
                <p className="data-strong">Population: <span>{population}</span></p>
                <p className="data-strong">Region: <span>{region}</span></p>
                <p className="data-strong">Capital: <span>{capital}</span></p>
            </section>
        </Link>
    )
}

export default Card