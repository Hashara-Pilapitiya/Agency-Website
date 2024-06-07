import './App.css';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Register from './Pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

    return (
    <div>
      
      <BrowserRouter>

          <Routes>
      
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/register' element={<Register/>}/>

          </Routes>

      </BrowserRouter>
      

    </div>
  );
}

export default App;
