import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import SideMenu from './components/SideMenu';

import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-container">
          <SideMenu />
        </div>
      </div>
    </Router>
  );
}

export default App;
