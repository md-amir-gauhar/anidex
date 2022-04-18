import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import SideMenu from './components/SideMenu';
import Home from './pages/Home'

import './App.css'
import VideoPage from './pages/VideoPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-container">
          <SideMenu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/video/:id' element={<VideoPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
