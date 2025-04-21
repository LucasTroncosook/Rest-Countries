import { Link } from "react-router-dom";
import BtnHome from "../Btn/BtnHome"
import './country.css'

const Country = ({ count, navigate, bordersCount }) => {
    if(!count){
        return null
    }

    const { svg, alt } = count.flags;
    const { common } = count.name;
    const { nativeName } = count.name;
    const { population } = count;
    const { region } = count;
    const { subregion } = count;
    const { capital } = count;
    const { tld } = count;
    const { currencies } = count; 
    const { languages } = count; 

    const native = []
    const currenci = []
    const leng = []

    console.log(bordersCount)

    for(let nat in nativeName){
        native.push(nativeName[nat].common)
    }

    for(let curr in currencies){
        currenci.push(currencies[curr].name)
    }

    for(let len in languages){
        leng.push(languages[len])
    }

    return(
        <section className="container-country">
            <div className="container-box">
                <BtnHome navigate={navigate} />
                <div className="country">
                    <figure>
                        <img src={svg} alt={alt} />
                    </figure>
                    <section className="contry-data">
                        <h2>{common}</h2>
                        <section className="data">
                            <div>
                                <p>Native Name: <span>{native.join(', ')}</span></p>
                                <p>Population: <span>{population.toLocaleString('es-ES')}</span></p>
                                <p>Region: <span>{region}</span></p>
                                <p>Sub Region: <span>{subregion}</span></p>
                                <p>Capital: <span>{capital}</span></p>
                            </div>
                            <div>
                                <p>Top Level Domain: <span>{tld}</span></p>
                                <p>Currencies: <span>{currenci.length === 0 ? currenci : currenci.join(', ')}</span></p>
                                <p>Languages: <span>{leng.join(', ')}</span></p>
                            </div>
                        </section>
                        <section className="border">
                            <span>Border Countries: </span>
                            <div>
                               {bordersCount.map(border => (<Link key={border.name.common} to={`/country/${border.name.common}`}>{border.name.common}</Link>))}
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Country