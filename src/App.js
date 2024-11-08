import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login/'
import Payment from './components/Payment'
import Repayments from './components/Repayments'
import AdminHome from './components/AdminHome'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        
        <Route exact path='/payment' element={<Payment/>} />
        <Route exact path='/repayments' element ={<Repayments />}/>
        <Route exact path='/adminhome' element={<AdminHome/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
