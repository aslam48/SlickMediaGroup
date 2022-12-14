import React , {useState}from "react";
import "./App.css";
import Header from "./Component/ui/Header";
import Main from "./Component/ui/main";
import Search from "./Component/ui/Search";
import MovieSlide from "./Component/Movies/MovieSlide";
import Aslam from "./Component/ui/Aslam";
import debounce from "lodash.debounce";


function App() {

  const [query, setQuery] = useState("after");


  const updateQuery = e => setQuery(e?.target?.value);
  const debouncingChange = debounce(updateQuery, 1000)


  return (
    <div className="App">
      <Header />
      <Main />
      <Search getQuery={(q) => setQuery(q)}  />

      <section
        className="Carosel">
        <MovieSlide type="movie" title={"Movies"} query={query} debouncingChange={debouncingChange}/>
      </section>

      <section
        className="Carosel">
        <MovieSlide type="movie" title={"Series"} query='dog' />
      </section>

      <section
        className="Carosel">
        <MovieSlide type="movie" title={"Episode"} query="batman"/>
      </section>
      
      <Aslam />
    </div>
  );
}

export default App;
