import './App.css'
import { useEffect, useState } from 'react'
import { gifsMock } from './mocks/gifs'
import { Form, Header, Gifs } from './components'

const API_KEY = 's010Hvm0LHtOrFZK5H5wjnWrdh5zJZr8'
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`

export function App () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [gifs, setGifs] = useState([])
  const handleFormSubmit = (query) => {
    setQuery(query)
  }

  //Permite ejecutar funciones asincronicas
  useEffect(() => {
    fetch(`${BASE_URL}&q=${query}`)
    .then( res => {
        if(!res.ok) {
            throw new Error("Error fetching data")
        }
        return res.json()
    })
    .then ( ({data}) => {
      console.log(data);
      const gifsData = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        img: gif.images.original.url,
      }));
      setGifs(gifsData)  
    })
    .catch((e) => {
        setError('Sorry, we have problems with your request')
    })
    .finally
  }, [query])

  return (
    <>
      <Header title='Gif Search App' />
      <main>
        <Form onSubmit={handleFormSubmit} />
        <Gifs gifs={gifs} error={error} isLoading={isLoading}/>
      </main>
    </>
  )
}