import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Register, Dash, AdminLogin, AdminDash, Nomatch, ChangePassword, UserDisplay } from './pages/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dash />} />
          <Route path='/password' element={<ChangePassword />} />
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<AdminDash />} />
          <Route path='/admin/dashboard/userdisplay' element={<UserDisplay />} />
          <Route path='*' element={<Nomatch />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
