import React, { useContext } from 'react'
import TempCard from '../../Sidebars/TempCard'
import { ActionProvider } from '../../DataContextProvider/DataContext'
import { TempCardContent } from '../../Sidebars/TempCard'

export default function SelectedCard() {
	const { state } = useContext(ActionProvider)
	return (
		<div className="d-flex">
			<div className="home-container">
				<div className="content-wraper p-2 w-75">
					{ state.tempCardData ? <TempCardContent data={ state.tempCardData } /> : "loading..." }
				</div>
			</div>
			<TempCard />
		</div>
	)
}