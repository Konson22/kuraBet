import React from 'react'
import TempCard from '../../Sidebars/TempCard'


export default function UserCards() {
	return (
		<div className="d-flex">
			<div className="home-container">
				<div className="content-wraper">
					UserCards
				</div>
			</div>
			<div className="temp-card-container">
				<TempCard />
			</div>
		</div>
	)
}
