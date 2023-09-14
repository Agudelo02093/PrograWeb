import './App.css'
import { useEffect, useState } from 'react'
import { gifsMock } from './mocks/gifs'
import { Form, Header, Gifs } from './components'

const API_KEY = 's010Hvm0LHtOrFZK5H5wjnWrdh5zJZr8'
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=Mushrooms`

export function App () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [gifs, setGifs] = useState(null)
  const handleFormSubmit = (query) => {
    setQuery(query)
  }

  //Permite ejecutar funciones asincronicas
  useEffect(() => {
    console.log("Fetch")
    fetch(BASE_URL)
    .then( res => {
        if(!res.ok) {
            throw new Error("Error fetching data")
        }
        return res.json()
    })
    .then ( ({data}) => {
       //setear el estado
    })
    .catch((e) => {
        console.log(e);
        setError('Sorry, we have problems with your request')
    })
  }, [query])

  return (
    <>
      <Header title='Gif Search App' />
      <main>
        <Form onSubmit={handleFormSubmit} />
        <Gifs gifs={gifsMock} />
      </main>
    </>
  )
}