import React, { useState, useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { ActionProvider } from '../../DataContextProvider/DataContext'


export default function MatechesDetails() {
	const { state, dispatch } = useContext(ActionProvider)
	const [bet, setBet] = useState(null)
	
	const handleSelectOdd = e => {
		
		setBet({
			selectedTeam:e.currentTarget.id.split("|")[0],
			selectedOdd:e.currentTarget.id.split("|")[1]
		})
	}

	
	const handleAddToLocalStorage = () => dispatch({ type:"addToLocalStorage", payload:{...state.selectedMatch, bet}})

	return (
		<div className="popup-overlay-wraper">
			<div className="content-wraper">
				<div className="my-bg content-header">
					<h4><FaTimes onClick={ () => dispatch({ type:"closePopup"})} /></h4>
				</div>
				<div className="content-body p-2">
					<div className="d-flex text-center py-4">
						<div className="w-100">
							<b>{ state.selectedMatch.hTeam }</b>
						</div>
						<div className="w-100">12-01-2021</div>
						<div className="w-100">
							<b>{ state.selectedMatch.aTeam }</b>
						</div>
					</div>
					<div className="betting-content text-center">
						<div className="betting-data" id={`1 | ${ state.selectedMatch.hOdd }`} onClick={ handleSelectOdd }>
							<span>Home win</span>
							<span>{ state.selectedMatch.hOdd }</span>
						</div>
						<div className="betting-data" id={`2 | ${ state.selectedMatch.aOdd }`} onClick={ handleSelectOdd }>
							<span>Away win</span>
							<span>{ state.selectedMatch.aOdd }</span>
						</div>
						<div className="betting-data" id={`x | ${ state.selectedMatch.dOdd }`} onClick={ handleSelectOdd }>
							<span>Draw</span>
							<span>{ state.selectedMatch.dOdd }</span>
						</div>
						<div className="betting-data" id={`1x | ${ state.selectedMatch.hOdd }`} onClick={ handleSelectOdd }>
							<span>Both Score</span>
							<span>{ state.selectedMatch.hOdd }</span>
						</div>
					</div>
					<div className="text-center p-3">
						<button className="btn btn-success mr-2" onClick={ handleAddToLocalStorage }>Place bet</button>
						<button className="btn btn-danger ml-2">Clear</button>
					</div>
				</div>
			</div>
		</div>
	)
}
