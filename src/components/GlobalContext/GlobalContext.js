import React, { useState, useEffect, createContext } from 'react'
export const GlobalContext = createContext()

export const DataProvider = props => {
    	const [tempCards, setTempCards] = useState(null)
	

	useEffect(()=>{
		if(localStorage.getItem('tempBetCard') != null){
			const data = JSON.parse(localStorage.getItem('tempBetCard'))
			setTempCards(data)
		}else{
			localStorage.setItem('tempBetCard', JSON.stringify([{ hTeam: "Everton FC", aTeam: "Manchester United", betFor: null, odds: 1.5 }]))
		}
	}, [])



	const handleSelectTeam = (t) => {
		let newData = (!tempCards) ? [t] : [...tempCards, t]
		localStorage.setItem('tempBetCard', JSON.stringify(newData))
		setTempCards(newData)
		console.log(newData)

	}
	console.log(tempCards)

	const [fixtures, setFixtures] = useState({
		status:false,
		data:null,
		error:false
	})

	useEffect(()=>{
		fetch('https://mzansibet-api.herokuapp.com/fixtures').then(res => res.json()).then(data => setFixtures({
		status:true,
		data:data,
		error:false
		}))
	}, [])

	
    return (
        <GlobalContext.Provider value={{ tempCards, fixtures, handleSelectTeam }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
