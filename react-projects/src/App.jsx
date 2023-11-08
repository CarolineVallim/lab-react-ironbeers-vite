import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AllBeers from './Pages/AllBeers';
import NewBeer from './Pages/NewBeer';
import RandomBeer from './Pages/RandomBeer';
import SingleBeer from './Pages/SingleBeer';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={< AllBeers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/beers/:beerId' element={<SingleBeer />} />
      </Routes>
    </div>
  )
}

export default App
