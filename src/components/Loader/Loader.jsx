import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <div className="loader-container text-center">
            <h5>Processing please wait....</h5>
            <div className="loaderImg">
                <img  src={process.env.PUBLIC_URL+'/images/loader.jpg'} alt="loader pic" />
            </div>
        </div>
    )
}
