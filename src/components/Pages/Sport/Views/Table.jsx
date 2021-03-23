import React, { useContext } from 'react'
import { DataProvider } from '../../../DataContextProvider/DataContext'
import TempCard from '../../../Sidebars/TempCard'
import SubNavbar from './../SportHaeder/SubNavbar'
import Loader from '../../../Loader/Loader'


export default function Table() {
	const { standing } = useContext(DataProvider)

	return (
		<>
		<div className="d-flex">
			<div className="home-container">
				<SubNavbar />
				<div className="content-wraper">
					{ standing ? <SportContent standing={ standing.standings }/> : <Loader /> }
				</div>
			</div>
			<div className="temp-card-container">
				<TempCard />
			</div>
		</div>
		</>
	)
}



export  function SportContent({ standing }) {

	return (
		<div className="content-body p-2">
				<div className="table-container">
					<table className="table">
						<thead>
							<tr>
								<td>Teams</td>
								<td>p</td>
								<td>w</td>
								<td>d</td>
								<td>l</td>
								<td>dif</td>
								<td>sc</td>
								<td>ag</td>
							</tr>
						</thead>
						<tbody>
							{ (standing.length >= 0) ? standing.map(team => <TableData data={ team }/>) : "No data found" }
						</tbody>
					</table>
				</div>
			</div>
	)
}



export const TableData = ({data}) => {

	let key = 52
	return (
		<tr key={ key++ }>
			<td><span className="bg-warning p-2">{ data.position }</span> Manchester United </td>
			<td>{ data.overall.games_played }</td>
			<td>{ data.overall.won }</td>
			<td>{ data.overall.draw }</td>
			<td>{ data.overall.lost }</td>
			<td>{ data.overall.goals_diff }</td>
			<td>{ data.overall.goals_scored }</td>
			<td>{ data.overall.goals_against }</td>
		</tr>
	)
}



