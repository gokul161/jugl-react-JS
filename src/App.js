import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Showprofile from './Showprofile';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/showprofile/:id" element={<Showprofile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
