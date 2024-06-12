import { useState } from 'react'
import './App.css'
import { ClimbingBoxLoader } from 'react-spinners'

function App() {
  const [quote, setQuote] = useState("Get your Advice")
  const [loading, setLoading] = useState(false)
  const handleQuote = async e => {
    e.preventDefault();

    try {
      const api_Url = "https://api.adviceslip.com/advice";
      setLoading(true)
     const response = await fetch (api_Url);
     const result = await response.json();
     setLoading(false)
     setQuote(result.slip.advice)
    } catch (error) {
      setQuote('There was an error')
      setLoading(false)
    }
  } 

  return (
    <>
    <h1>By Bridget Gitonga</h1>
    <h2>{quote}</h2>
    <button type='button' onClick={handleQuote}>Generate Random Quote</button>
    <h1>{loading && <ClimbingBoxLoader color="#36d7b7" size={40}/>}</h1>
    </>
  )
}

export default App
