import React, {useState} from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {

  const [movies, setMovies]=useState([])



 function handleAddMovies (newMovie) {

      console.log(newMovie)



    setMovies([...movies, newMovie ])
  }


  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform  handleSubmit={handleAddMovies}  />
        </div>
        <div className='layout-column w-30'>
          <Search />
          <Movieslist movies = {movies} />
          <div data-testid='noResult'>
            <h3 className='text-center'>No Results Found</h3>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default App;
