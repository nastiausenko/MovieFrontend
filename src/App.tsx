import './App.css';
import { Header } from './components/Header/Header.tsx';
import { Home } from './components/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import { Movies } from './components/Movie/Movie.tsx';
import { MovieDetails } from './components/Movie/MovieDetails.tsx';
function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/movies" element = {<Movies/>}/>
        <Route path="/movie/:imdbId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
