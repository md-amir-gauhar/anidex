import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import SideMenu from './components/SideMenu';
import Home from './pages/Home'

import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-container">
          <SideMenu />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
