import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Login, Register, Dash, AdminLogin, AdminDash} from './pages/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <Router>
        <div className="App">
            <Routes>
              <Route path='/register' element={<Register/>}/>
              <Route path='/users' element={<AdminDash />}/>
              <Route path='/admin' element={<AdminLogin />}/>
              <Route path='/dashboard' element={<Dash/>}/>
              <Route path='/' element={<Login/>}/>
            </Routes>
        </div>
        <ToastContainer />
      </Router>
  );
}

export default App;
