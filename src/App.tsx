import './App.css';
import { Header } from './components/Header/Header.tsx';
import { Home } from './components/Home.tsx';
import { Route, Routes } from 'react-router-dom';
function App() {

  

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element ={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
