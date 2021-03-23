import React, { useEffect, useState, useContext } from 'react'
import { FaBasketballBall, FaPlusCircle, FaChartLine, FaTimes } from 'react-icons/fa'
import Loader from '../../Loader/Loader'
import { ActionProvider } from '../../DataContextProvider/DataContext'



export default function SportContent({ teamOdds }) {

	return  (teamOdds.length >= 1) ? teamOdds.map(standing => <TableData data={ standing } /> ) : <Loader /> 
			
}



export const TableData = ({data}) => {

	let index = 52
	return (
		<div className="content-wraper mb-3" key={ index++ }>
			<div className="my-bg content-header">
				<h4><FaBasketballBall /> Sport { data.round }</h4>
			</div>
			<div className="content-body">
				<div className="table-container">
					<table className="table table-striped">
						<thead>
							<tr>
								<td>Teams</td>
								<td>1</td>
								<td>x</td>
								<td>2</td>
								<td className="tble-extra">Action</td>
							</tr>
						</thead>
						<tbody>
							{ data.games.map( game => <TableBody game={ game } /> ) }
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}


export const TableBody = ({ game }) => {
	const { dispatch } = useContext(ActionProvider)

	return (
		<tr key={ game.code } onClick={ () => dispatch({ type:"openPopup", payload:game})}>
			<td className="row-content">
				<div>
					<div>{ game.hTeam } - { game.aTeam }</div>  
					<div className="tble-exta">11-02-2021</div>
				</div>
			</td>
			<td>{ game.hOdd }</td>
			<td>{ game.dOdd }</td>
			<td>{ game.aOdd }</td>
			<td>
				<span className="tble-extra"  onClick={ () => dispatch({ type:"openPopup", payload:game})}><FaPlusCircle className="tbl-btn"/></span>
			</td>
		</tr>
	)
}