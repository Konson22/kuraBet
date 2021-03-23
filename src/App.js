import { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DataContext } from './components/DataContextProvider/DataContext'
import Navbar from './components/MainNavbar/Navbar'
import HomePage from './components/Pages/HomePage/HomePage'
import Sport from './components/Pages/Sport/SportMain'
import Table from './components/Pages/Sport/Views/Table'
import Result from './components/Pages/Sport/Views/Result'
import Profile from './components/Pages/Profile/Profile'
import UserCards from './components/Pages/UserCards/UserCards'
import TempCard from './components/Sidebars/TempCard'
import QuickLink from './components/Sidebars/QuickLink'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import './App.css';

function App() {
  
  return (
    <Router>
      <DataContext>
      <div className="App">
        <Navbar />
        <Header />
          <div className="app-inner-container d-flex">
            <QuickLink />
            <div className="app-container">
              <Switch>
                <Route exact path="/" component={ Sport }/>
                <Route exact path="/sport" component={ Sport }/>
                <Route exact path="/sport/table" component={ Table }/>
                <Route exact path="/sport/results" component={ Result }/>
                <Route exact path="/profile" component={ Profile }/>
                <Route exact path="/shoping-card" component={ TempCard }/>
                <Route exact path="/my-cards" component={ UserCards }/>
              </Switch>
            </div>
          </div>
      </div>
      </DataContext>
    </Router>
  );
}

export default App;
