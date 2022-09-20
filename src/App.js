import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import LandingPage from './components/LandingPage/LandingPage.js'
import Login from './components/Login/Login.js'
import WeatherSearch from './components/WeatherSearch/WeatherSearch.js'

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/weather" element={<WeatherSearch />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={"<Signup />"} />


          </Routes>
      
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
