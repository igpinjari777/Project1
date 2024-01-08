
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import ListEmp from './components/ListEmp';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import AddEmp from './components/AddEmp'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className='container'>
          <Routes>
            <Route exact path='/' Component={ListEmp}></Route>
            <Route exact path='/employees' Component={ListEmp}></Route>
            <Route exact path='/add-employee' Component={AddEmp}></Route>
            <Route exact path='/edit-employee/:id' Component={AddEmp}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
