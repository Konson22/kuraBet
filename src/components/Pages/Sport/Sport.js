import React, { useState, useEffect, useContext } from 'react'
import Subnavbar from './Subnavbar/Subnavbar'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
import './Sport.css'
import { FaChartArea, FaChartPie, FaPlusCircle } from 'react-icons/fa'
import { BsXCircle } from 'react-icons/bs'
import { Card, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap'
import Loader from '../../Loader/Loader'

export default function Sport() {
   const { fixtures, handleSelectTeam } = useContext(GlobalContext)

   const [currentSelectedMatch, setCurrentSelectedMatch] = useState({
         status:false,
         hTeam:{
            name:"Man United",
            odds:1.5
         },
         aTeam:{
            name:"Chelsia FC",
            odds:1.5
         },
         betFor:["Home", "away", "draw"],
         userBet:null
      })

   const [isActive, setIsActive] = useState(false)

	const togglePopupModule = (ev) => {
      setCurrentSelectedMatch({
         status:true,
         hTeam:{
            name:ev.hTeam,
            odds:1.5
         },
         aTeam:{
            name:ev.aTeam,
            odds:1.5
         },
         betFor:["Home win", "away win", "draw", "home score",  "away score", "both score"],
         userBet:null
      })
      setIsActive(true)
   }
	const closePopupModule = () => setIsActive(false)
   
   const handleSelectBet = ev =>{
      setCurrentSelectedMatch({ ...currentSelectedMatch, userBet:ev.target.value})
   }

   const handleSubmission = () => {
      const userTempCard = {
         hTeam:currentSelectedMatch.hTeam.name,
         aTeam:currentSelectedMatch.aTeam.name,
         betFor:currentSelectedMatch.userBet,
         odds:currentSelectedMatch.hTeam.odds
      }
      handleSelectTeam(userTempCard)
      // console.log(userTempCard)
   }
      

   return (
      <div>
         <Subnavbar />
         <div className="sport-inner-content-wraper">
            { fixtures.status ? fixtures.data[0].rounds.map(round => <SportTable togglePopupModule={togglePopupModule} round={ round } /> ) : "loading.." }
         </div>
         <div className={ isActive ? "overlay-module-wraper show" : "overlay-module-wraper hide" }>
            <Card className="inner-module-wraper">
               <Card.Header>
                  <BsXCircle onClick={ closePopupModule } />
               </Card.Header>
               <div className="">
                  <div className="module-content-wraper">
                     { 
                        currentSelectedMatch ? 
                        <>
                        <div className="">
                           <h4>{ currentSelectedMatch.hTeam.name }</h4>
                           <span><b>Home</b> { currentSelectedMatch.hTeam.odds  }</span>
                        </div>
                        <div className="">
                           <h4>Vs</h4>
                        </div>
                        <div className="">
                           <h4>{ currentSelectedMatch.aTeam.name }</h4>
                           <span><b>Away</b> { currentSelectedMatch.aTeam.odds }</span>
                        </div> 
                        </>
                        : "loading.."
                     }
                  </div>
                  <div className="text-center m-4">
                     <select className="form-control" onChange={ handleSelectBet }>
                        <option value={currentSelectedMatch.betFor[5]} >{currentSelectedMatch.betFor[0]}</option>
                        <option>{currentSelectedMatch.betFor[1]}</option>
                        <option>{currentSelectedMatch.betFor[2]}</option>
                        <option>{currentSelectedMatch.betFor[3]}</option>
                        <option>{currentSelectedMatch.betFor[4]}</option>
                        <option>{currentSelectedMatch.betFor[5]}</option>
                     </select>
                     <Button className="mt-3" onClick={ handleSubmission }>Add to Card</Button>
                  </div>
               </div>
            </Card>
         </div>
      </div>
   )
}


export const SportTable = ({ round, togglePopupModule }) =>{

   return (
            <div className="light-dark-bg sport-table-wraper">
               <div className="blue-bg sport-table-header">
                  <h4>Round { round.round }</h4>
               </div>
               <table className="my-table table table-striped">
                  <thead>
                     <tr>
                        <td>date</td>
                        <td colSpan="3">Match</td>
                        <td>Home</td>
                        <td>Draw</td>
                        <td>per</td>
                        <td className="text-right">Actions</td>
                     </tr>
                  </thead>
                  <tbody>
                     { round.games.map(game => <TableRow togglePopupModule={togglePopupModule} game={ game }/>) }
                  </tbody>
               </table> 
            </div>
      
   )
}

export const TableRow = ({ game, togglePopupModule }) => {
   const { handleSelectTeam } = useContext(GlobalContext)

   return (
         <tr>
            <td>11/02/21</td>
            <td>{ game.hTeam }</td>
            <td>Vs</td>
            <td>{ game.aTeam }</td>
            <td>1.8</td>
            <td>0.9</td>
            <td>per</td>
            <td className="text-right">
               <span><FaChartPie className="table-icon" /> </span>
               <span id={game.hProb} onClick={ () => { togglePopupModule(game)} }><FaPlusCircle className="table-icon" /> </span>
            </td>
         </tr>
   )
}