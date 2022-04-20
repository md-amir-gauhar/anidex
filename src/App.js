import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import SideMenu from './components/SideMenu';
import Home from './pages/Home'
import VideoPage from './pages/VideoPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
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
