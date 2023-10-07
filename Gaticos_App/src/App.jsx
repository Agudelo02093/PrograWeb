import React from 'react'
import { Header, Button, RandomFact } from './components'
import { GaticoContextProvider } from './context/GaticoContextProvider'
import { ImgCat } from './components/ImgCat/ImgCat'

export function App () {
  return (
    <div>
      <Header title='Random Fact Cat App'/>
      <GaticoContextProvider>
        <main className='bodyCat'>
          <ImgCat />
          <div className='infoCats'>
            <RandomFact />
            <Button title='Random Fact'/>
          </div>
        </main>
      </GaticoContextProvider>        
    </div>
  )
}
