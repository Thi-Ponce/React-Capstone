import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetails from './components/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
