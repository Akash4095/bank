import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import { Route, Routes } from 'react-router-dom';
import Transaction from './pages/trasaction';
import Intrest from './pages/intrest';
import Journals from './pages/journals';
import Statements from './pages/statements';
import Todo from './pages/todo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Homepage} />
        <Route path='/transaction' Component={Transaction} />
        <Route path='/intrest' Component={Intrest} />
        <Route path='/journals' Component={Journals} />
        <Route path='/statement' Component={Statements} />
        <Route path='/todo' Component={Todo} />
      </Routes>
    </div>
  );
}

export default App;
