import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css';
import LandingPage from './components/LandingPage/LandingPage.js'
function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/weather" element={"weather"} />
            <Route path="/login" element={"<Login />"} />
            <Route path="/sign-up" element={"<Signup />"} />


          </Routes>
      
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
