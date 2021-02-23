import React from 'react'

export default function Subheader() {
    const bckImg = process.env.PUBLIC_URL+"/images/championship.jpg"
   return (
      <div className="subheader-wraper" style={{backgroundImage:`URL(${bckImg})`, backgroundSize:"100% 100%"}}>
         Subheader
      </div>
   )
}
