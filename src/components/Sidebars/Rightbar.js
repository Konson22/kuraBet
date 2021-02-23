import React, { useState, useEffect, useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FormControl } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext/GlobalContext'
import './Sidebars.css'


export default function Rightbar() {
    const { tempCards } = useContext(GlobalContext)

    return (
        <div className="title-wrape">
            <div className="right sidebar-content-wraper text-center">
                <div className="light-dark-bg left-header">
                    <b>Credit</b>
                    <h2>120$</h2>
                </div>
                <div className="light-dark-bg right-header">
                    <NavLink to="/cards">
                    <b>Cards</b>
                    <h2>0</h2>
                    </NavLink>
                </div>
            </div>
            <div className="card light-dark-bg sidebar-content-wraper">
                { tempCards ? <TempCardBody bet={ tempCards }/> : "No Card found!"}
            </div>
            
        </div>
    )
}


export const TempCardBody = ({ bet }) => {
    const handleBetting = () => localStorage.clear('tempBetCard')
    return  (
        <>
        <table className="table">
            <thead>
                <tr>
                    <td>Teams</td>
                    <td>Bet</td>
                    <td>Odds</td>
                </tr>
            </thead>
            <tbody>
                {
 
                     bet.map(team => 
                        <tr>
                            <td><FaTimes className="text-danger" />{ team.hTeam }</td>
                            <td> {  team.betFor } </td>
                            <td> {  team.odds } </td>
                        </tr>
                    ) 
                }
                    </tbody>
                </table>
                <div className="pb-3">
                    <table className="inner-table">
                        <tr>
                            <td>Total matches</td>
                            <td>{bet.length}</td>
                        </tr>
                        <tr>
                            <td>Total odds</td>
                            <td>12.8</td>
                        </tr>
                        <tr>
                            <td>Stock</td>
                            <td>500 SSP</td>
                        </tr>
                        <tr>
                            <td>Posible payout</td>
                            <td>500 SSP</td>
                        </tr>
                        <tr>
                            <td colSpan="2"><FormControl type="text" placeholder="Enter Amount" /></td>
                        </tr>
                    </table>

                </div>
                <div className="text-center pb-3">
                    <button className="btn btn-success btn-sm" onClick={ handleBetting }>Bet Now</button>
                    <button className="btn btn-primary btn-sm mx-2">Book Now</button>
                    <button className="btn btn-danger btn-sm">Clear</button>
                </div>
        </>
    )
}

