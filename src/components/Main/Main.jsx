import { useFiled, useSelectField } from '../../hooks'
import Select from 'react-select'
import './main.css'
import Card from '../Card/Card'

const Main = ({ countries }) => {
    const filter = useFiled('text')
    const region = useSelectField()
    
    const options = [
        { value: 'Africa', label: 'Africa' },
        { value: 'Americas', label: 'Americas' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Oceania', label: 'Oceania' }
    ]
    
    const regionCountries = countries
        .filter(c => c.name.common.includes(filter.value))
        .filter(c => region?.value?.value ? c.region === region?.value?.value : true )
        .sort((a,b) => a.name.common.localeCompare(b.name.common))

    return(
        <main className="main">
            <div className="main-container">
                <header>
                    <div className="search-name">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                            >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                        <input 
                            type={filter.type}
                            value={filter.value}
                            placeholder='Search for a country...'
                            onChange={filter.onChange}
                        />
                    </div>
                    <Select 
                        options={options}
                        value={region.value}
                        onChange={region.onChange}
                        placeholder="Filter by Region"
                    />
                </header>
                <section className='container-cards'>
                    {[...regionCountries].map(country => (
                        <Card 
                            data={country}
                            key={country.name.common}
                        />
                    ))}
                </section>
            </div>         
        </main>
    )
}

export default Main