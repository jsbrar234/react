
import Navbar from './components/Navbar'
import './App.css';
import Scroll from './components/Scroll';
import Blogs from './components/Blogs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import Home from './components/Home';
import Hello from './components/Hello';
import Employee from './components/Employe_data/Employee';
import Counter from './components/Counter/Counter';
import Use_context from './components/Use_Conetext/Use_context';
import Use_reducer from './components/Use_reducer/Use_reducer';
import Use_reducer_by_me from './components/Use_reducer/Use_reducer_by_me';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blogs" exact element={<Blogs />} />
          <Route path="/hello" exact element={<Hello />} />
          <Route path="/emp" exact element={<Employee/>} />
          <Route path="/counter" exact element={<Counter/>} />
          <Route path="/use-context" exact element={<Use_context/>} />
          <Route path="/use-reducer" exact element={<Use_reducer/>} />
          <Route path="/use-reducer-by-me" exact element={<Use_reducer_by_me/>} />
          <Route path="/calculator" exact element={<Calculator/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
