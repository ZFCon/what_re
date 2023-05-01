import './App.css';
import { MyNavbar, ProductList, Login } from './components';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className='container my-5'>
        <Login />
      </div>
    </div>
  );
}

export default App;
