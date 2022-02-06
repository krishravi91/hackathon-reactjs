import Topbar from "./components/topbar/Topbar.js";
// import react from "react";
import Slider from "./components/slider/Slider.js";
import MovieList from "./components/movies/Movies.js";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Slider />
      <MovieList />
      
    </div>  

  );
}

export default App;
