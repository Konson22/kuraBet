import React, { useContext } from 'react'
import { DataProvider } from '../../../DataContextProvider/DataContext'
import TempCard from '../../../Sidebars/TempCard'
import SubNavbar from './../SportHaeder/SubNavbar'
import Loader from '../../../Loader/Loader'


export default function Result() {
	const { matches } = useContext(DataProvider)

	return (
		<>
		<div className="d-flex">
			<div className="home-container">
				<SubNavbar />
				{ matches ? <ResultsContent data={ matches.data } /> : "loading..." }
			</div>
			<div className="temp-card-container">
				<TempCard />
			</div>
		</div>
		</>
	)
}

export const ResultsContent = ({ data }) => {

	return (
		<div className="content-wraper">
			<div className="my-bg content-header">
				<h4>{ data.name }</h4>
			</div>
			<div className="content-body">
				{ (data.rounds.length >= 1) ? data.rounds.map(matches => <MatchesTable games={ matches } />) : "No matches found" }
			</div>
		</div>
	)
}

export const MatchesTable = ({ games }) => {

	return (
		<table className="table">
			<thead>
				<tr>
					<td>Teams</td>
				</tr>
			</thead>
			<tbody>
				{
					games.matches.map(match => <TableRow team={ match }/> )
				}
			</tbody>
		</table>
	)
}

export const TableRow = ({ team }) => {
	return (
		<tr>
			<td>{ team.team1.name }</td>
			<td>{ team.score1 } - { team.score2 }</td>
			<td>{ team.team2.name }</td>
		</tr>
	)
}