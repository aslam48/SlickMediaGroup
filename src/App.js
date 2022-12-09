import React, {useEffect, useState} from 'react' 
import './App.css';
import Header from './Component/ui/Header';
import Main from './Component/ui/main';
import Search from './Component/ui/Search';
import MovieSlide from './Component/Movies/MovieSlide';
import axios from 'axios';

function App() {

  const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState("")

    useEffect(()=> {
      const fechitems = async () => {
        const result = await axios("https://www.omdbapi.com/?s=transformer&apikey=2e22b3a2")
        setItems(result.Search)
        setIsLoading(false)
        console.log(result.data)
    }
    fechitems()

    }, [query])


  return (
    <div className="App">
    <Header/>
    <Main/>
    <Search getQuery={(q) => setQuery(q)}/>
    <MovieSlide isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
