import React, { useEffect, useState, createContext, useReducer } from 'react'
import axios from 'axios'

export const DataProvider = createContext()
export const ActionProvider = createContext()



export const reducer = (state, action) => {
	switch (action.type) {
		case "openPopup":{
			return{
				...state,
				selectedMatch:action.payload,
				showPopup:true
			}
		}
		case "closePopup":{
			return{
				...state,
				showPopup:false
			}
		}
		case "addToLocalStorage":{
			let newTempCard = state.tempCardData ? [...state.tempCardData, action.payload] : [action.payload]
			return{
				...state,
				tempCardData:newTempCard,
				showPopup:false
			}
		}
		case "loadLocalData":{
			let localData = JSON.parse(localStorage.getItem('tempCard'))
			return{
				...state,
				tempCardData:localData
			}
		}
		case "removeMatch":{
			let newData = state.tempCardData.filter(match => match.code !== action.payload)
			console.log(newData)
			return{
				...state,
				tempCardData:newData
			}
		}
		case "clearLocalStore":{
			
			return{
				...state,
				tempCardData:null
			}
		}
			
		default:
			break;
	}
}
const initState = {
	isLoading:false,
	showPopup:false,
	selectedMatch:null,
	tempCardData:null,
	standing:null
}
export  function DataContext(props) {
	const [state, dispatch] = useReducer(reducer, initState)
	const [standing, setStanding] = useState(null)
	const [teamOdds, setOdds] = useState(null)
	const [matches, setMatches] = useState(null)

	useEffect(() => axios('mzansibet-api.herokuapp.com/odds').then(response => setOdds(response.data)), [])
	useEffect(() => axios('mzansibet-api.herokuapp.com/standings').then(response => setStanding(response.data.data)), [])
	useEffect(() => axios('mzansibet-api.herokuapp.com/matches').then(response => setMatches(response)), [])

	useEffect(()=> {
		state.tempCardData && localStorage.setItem('tempCard', JSON.stringify(state.tempCardData)) 
	}, [state.tempCardData])
	
	useEffect(()=>{
		dispatch({ type:"loadLocalData"})
	}, [])



	return (
		<DataProvider.Provider value={{ standing, teamOdds, matches }}>
		<ActionProvider.Provider value={{ state, dispatch }}>
			{props.children}
		</ActionProvider.Provider>
		</DataProvider.Provider>
	)
}
