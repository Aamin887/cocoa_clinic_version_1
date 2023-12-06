import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Login, Register, Dash, AdminLogin, AdminDash, Nomatch} from './pages/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <Router>
        <div className="App">
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/admin/login' element={<AdminLogin />}/>
              <Route path='/user/register' element={<Register/>}/>
              <Route path='/admin/dashboard' element={<AdminDash />}/>
              <Route path='/user/dashboard' element={<Dash/>}/>
              <Route path='*' element={<Nomatch/>}/>
            </Routes>
          <ToastContainer />
        </div>
      </Router>
  );
}

export default App;
