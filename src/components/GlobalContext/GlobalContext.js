import React, { useState, useEffect, createContext } from 'react'
export const GlobalContext = createContext()

export const DataProvider = props => {
    const [matches, setMatches] = useState({
        status:false,
        data:null
    })
    // setting state for userCard
    const [bet, setBet] = useState({
        status:false,
        data:[]
    })

  
    // FETCHING MATCHES DATA
    useEffect(()=>{
        fetch('http://localhost:5000/matches').then(res => res.json()).then(data => setMatches({
            status:true,
            data:data
        }))
    }, [])

    // SETTING BET SLIP CARD
    useEffect(()=>{
        if(localStorage.getItem('userCard')){
            if(localStorage.getItem('userCard') !== null)setBet({
                status:true,
                data:JSON.parse(localStorage.getItem('userCard'))
            })
        }
    }, [])

    //CLEARING BET SLIP
    const clearSlipCard = () => {
        localStorage.setItem('userCard', [])
            setBet({
            status:false,
            data:[]
        })
    }

    const handleAddBet = e => {
        setBet({
            status:true,
            data:[...bet.data, e]
        })
        localStorage.setItem('userCard', JSON.stringify(bet.data))
    }
    return (
        <GlobalContext.Provider value={{ matches, handleAddBet, bet, clearSlipCard }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
