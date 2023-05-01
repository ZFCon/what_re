import './App.css';
import { MyNavbar, ProductList, Login } from './components';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className='container my-5'>
          <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
