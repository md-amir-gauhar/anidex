import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import SideMenu from './components/SideMenu';
import Home from './pages/Home'
import VideoPage from './pages/VideoPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import WatchLater from './pages/WatchLater';
import Liked from './pages/Liked';
import History from './pages/History';
import PrivateRoutes from './utils/PrivateRoutes';

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
            <Route path='/liked' element={
              <PrivateRoutes>
                <Liked />
              </PrivateRoutes>
            } />
            <Route path='/watchlater' element={
              <PrivateRoutes>
                <WatchLater />
              </PrivateRoutes>
            } />
            <Route path='/history' element={
              <PrivateRoutes>
                <History />
              </PrivateRoutes>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
