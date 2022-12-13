import React , {useState}from "react";
import "./App.css";
import Header from "./Component/ui/Header";
import Main from "./Component/ui/main";
import Search from "./Component/ui/Search";
import MovieSlide from "./Component/Movies/MovieSlide";
import Aslam from "./Component/ui/Aslam";
// import { fechitems } from "./action";

function App() {
  const [query, setQuery] = useState("after");

  return (
    <div className="App">
      <Header />
      <Main />
      <Search getQuery={(q) => setQuery(q)} />

      <section
        className="Carosel">
        <MovieSlide type="movie" title={"Movies"} query={query} />
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
