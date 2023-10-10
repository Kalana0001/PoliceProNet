import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './coponents/NavBar/NavBar';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './pages/Register/Register';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <main>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/blog' element={<Blog/>}/>
            </Routes>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
