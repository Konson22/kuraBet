import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
// import LeftSidebar from './components/Sidebars/LeftSidebar'
import RightSidebar from './components/Sidebars/RightSidebar'
import ScrollToTop from './components/ScrollToTop'
import Basketball from './components/Pages/Basketball/Basketball'
import Inplay from './components/Pages/Inplay/Inplay'
import Soccer from './components/Pages/Soccer/Soccer'
import Tennis from './components/Pages/Tennis/Tennis'
import HourseRace from './components/Pages/HourseRace/HourseRace'
import MultiMarket from './components/Pages/MultiMarket/MultiMarket'
import Cricket from './components/Pages/Cricket/Cricket'
import Sport from './components/Pages/Sport/Sport'
import './App.css'
export default function Admin() {
    return (
       <Router>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <div className="man-container">
              {/* <LeftSidebar  /> */}
              <main className="man-wraper">
                <Route exact path="/"><Main /></Route>
                <Route exact path="/sport"><Sport /></Route>
                <Route exact path="/basketball"><Basketball /></Route>
                <Route exact path="/inplay"><Inplay /></Route>
                <Route exact path="/soccer"><Soccer /></Route>
                <Route exact path="/tennis"><Tennis /></Route>
                <Route exact path="/hourse-race"><HourseRace /></Route>
                <Route exact path="/multi-market"><MultiMarket /></Route>
                <Route exact path="/cricket"><Cricket /></Route>
              </main>                
              <RightSidebar />
            </div>
          </Switch>
        </Router>
    )
}
