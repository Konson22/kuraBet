import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/Pages/HomePage/HomePage'
import Sport from './components/Pages/Sport/Sport'
import LiveNow from './components/Pages/Sport/LiveNow/LiveNow'
import Results from './components/Pages/Sport/Results/Results'
import Upcoming from './components/Pages/Sport/Upcoming/Upcoming'
import Header from './components/Header/Header'
import Subheader from './components/Header/Subheader'
import Rightbar from './components/Sidebars/Rightbar'
import Cards from './components/Pages/Cards/Cards'
import LeftSidebar from './components/Sidebars/Leftbar'
import { DataProvider } from './components/GlobalContext/GlobalContext'

import './App.css'


export default function Admin() {
    return (
       <Router>
          <Header />
          <DataProvider>
          <div className="main-app-wraper">
            <aside className="left-wraper">
              <LeftSidebar />
            </aside>

            <main className="main-container">
              <Subheader/>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/sport" component={Sport} />
                <Route exact path="/live-now" component={LiveNow} />
                <Route exact path="/results" component={Results} />
                <Route exact path="/upcoming" component={Upcoming} />
                <Route exact path="/cards" component={Cards} />
              </Switch>
            </main>

            <aside className="right-wraper">
              <Rightbar />
            </aside>
          </div>
          </DataProvider>
        </Router>
    )
}
