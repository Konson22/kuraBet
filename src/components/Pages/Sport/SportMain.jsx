import React, { useContext } from 'react'
import { DataProvider, ActionProvider } from '../../DataContextProvider/DataContext'
import TempCard from '../../Sidebars/TempCard'
import SubNavbar from './SportHaeder/SubNavbar'
import MatechesDetails from '../Sport/MatechesDetails'
import Loader from '../../Loader/Loader'
import SportContent from './SportContent'
import './SportMain.css'


export default function SportMain() {
	const { teamOdds } = useContext(DataProvider)
	const { state, dispatch } = useContext(ActionProvider)

	return (
		<>
		{ state.showPopup && <MatechesDetails/> }
        
		<div className="d-flex">
			<div className="home-container">
				<SubNavbar />
				{ teamOdds ? <SportContent teamOdds={ teamOdds[0].rounds }/> : <Loader /> }
			</div>
			<div className="temp-card-container">
				<TempCard />
			</div>
		</div>
		</>
	)
}
