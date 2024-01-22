import logo from './logo.svg';
import './App.css';
import { AnimeDetails } from './animeDetails';
import { AnimeList } from './animeList';
import { Route,Router,Routes } from 'react-router-dom';








const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const App = () => {



  return (
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="/anime/:id" element={<AnimeDetails animeID={69}/>} />
      </Routes>
  );

};

export default App;

