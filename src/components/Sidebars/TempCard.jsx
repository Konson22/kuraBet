import React, { useState, useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { ActionProvider } from '../DataContextProvider/DataContext'
import { FormControl } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Sidebars.css'


export default function TempCard() {

	const { state, dispatch } = useContext(ActionProvider)
	let tempCardCount = state.tempCardData ? state.tempCardData.length : 0
	return (
		
		<div className="content-wraper">
              	<div className="content-header d-flex p-0">
				<div className="signle-card w-100">
					<h4>Single bet { tempCardCount }</h4>
				</div>
				<div className="multi-crad my-bg w-100">
					<h4>Multi bet</h4>
				</div>
			</div>
			{ 
				(state.tempCardData && state.tempCardData.length >= 1) ? <TempCardContent dispatch={ dispatch } data={ state.tempCardData } /> : 
				<div className="content-body text-center p-5">
					<p>Your card is empty try your luck today and win upto 500,000,000</p>
					<NavLink className="btn btn-danger" to="/sport">Start adding</NavLink>
				</div>
			}
		</div>
	)
}

export const TempCardContent = ({ dispatch, data }) => {
	const [stack, setStack] = useState(0)
	let totOdds = data ? data.map(match => match.bet.selectedOdd).reduce((a, t) => +a + +t, 0) : 0
	return (
		<div className="content-body pb-3">
			<table className="table">
				<tbody>
					{ data.map((card, key) => <TempCardTable dispatch={ dispatch } card={{ card, key }} />) }
				</tbody>
			</table>
			<table className="table">
				<tbody>
					<tr>
						<td>Total matches</td>
						<td>{ data.length }</td>
					</tr>
					<tr>
						<td>Total odds</td>
						<td>{ totOdds }</td>
					</tr>
					<tr>
						<td>Stack</td>
						<td>{ stack } SSP</td>
					</tr>
					<tr>
						<td>Posible win</td>
						<td colSpan="2">{ Math.round(stack * totOdds)} SSP</td>
					</tr>
				</tbody>
			</table>
			<div className="p-3">
				<FormControl type="text" placeholder="Add stack" onChange={ (e) => setStack(e.target.value)} />
			</div>
			<div className="text-center">
				<button className="my-success-btn">Place a bet</button>
				<button className="my-danger-btn" onClick={ ()=> dispatch({ type:"clearLocalStore"})}>Clear all</button>
			</div>
		</div>
	)
}

export const TempCardTable = ({dispatch, card}) => {

	return (
		<tr key={ card.key}>
			<td className="w-75">{ card.card.hTeam } - { card.card.hTeam } <br/> 02-01-2021 05:45 pm</td>
			<td className="w-">{ card.card.bet.selectedTeam }</td>
			<td className="w-">{ card.card.bet.selectedOdd }</td>
			<td><FaTimes className="table-xbtn" onClick={ () => dispatch({ type:"removeMatch", payload:card.card.code})}/> </td>
		</tr>
	)
}