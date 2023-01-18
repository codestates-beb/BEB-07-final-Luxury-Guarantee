import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>

    </div>
  );
}

export default App;
