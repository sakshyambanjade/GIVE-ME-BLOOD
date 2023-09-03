import { useState , useEffect} from 'react'
import {fetchDataFromApi} from "./utils/api"

function App() {

  useEffect(() => {
    apiTesting();
    },[])

    const apiTesting = () => {
        fetchDataFromApi('/3/discover/movie') 
        .then((res)=> {
          console.log(res); 
        })
    }
  return (
    <>
      <div className="App">

      </div>
    </>
  )
}

export default App
