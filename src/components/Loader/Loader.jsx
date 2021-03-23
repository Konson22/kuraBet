import React from 'react'
import './Loader.css'

export default function Loader() {
	
	return (
		<div className="loader-wraper d-flex justify-content-center">
			<div className="loader-content">
				<img className="loader-image" src={process.env.PUBLIC_URL + '/images/ajax-loader.gif'} alt="loading.." />
			</div>
		</div>
	)
}
