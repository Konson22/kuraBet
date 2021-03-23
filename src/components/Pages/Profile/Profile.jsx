import React from 'react'
import TempCard from '../../Sidebars/TempCard'
import './Profile.css'

export default function Profile() {
	return (
		<div className="d-flex">
			<div className="home-container">
				<div className="content-wraper">
					Profile
				</div>
			</div>
			<div className="temp-card-container">
				<TempCard />
			</div>
		</div>
	)
}
