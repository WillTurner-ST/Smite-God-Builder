import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Main from './view/Main'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path='/'/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
