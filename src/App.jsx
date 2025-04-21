import { useEffect, useState } from "react"
import countries from "./services/countries"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import { Route, Routes, useMatch, useNavigate } from "react-router-dom"
import Country from "./components/Country/Country"

const App = () => {
  const [country, setCountry] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    countries.getAll().then(country => {
      setCountry(country)
    }).catch(error => setError(error.code))
  }, [])

  const navigate = useNavigate()

  const match = useMatch('/country/:id')

  const count = match === null
  ? false
  : country.find(c => c.name.common === match.params.id)

  const borderCount = country.filter( c => c.borders?.includes(count?.cca3))

  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Main countries={country}/> } />
        <Route path="/country/:id" element={ <Country 
                                   count={count} 
                                   navigate={navigate} 
                                   bordersCount={borderCount} /> 
                                  }/>
      </Routes>
      { error && <h2 style={{ color: 'red', textAlign: 'center' }}>{error}</h2> }
    </>
  )
}

export default App