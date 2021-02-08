import React, { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import './GamesTable.css'

export default function GamesTable() {
    const [matches, setMatches] = useState({
        status:false,
        data:null
    })

    const matchesObj = [
        {
            time:new Date(),
            code:"x-fd4",
            Teams:"Beyrman Vs Arsenal",
            home:0.8,
            away:1.5,
            draw:1.9
        },
        {
            time: new Date(),
            code:"201-v",
            Teams:"Hillal Vs Man City",
            home:1.8,
            away:2.5,
            draw:1.9
        },
        {
            time: new Date(),
            code:"x-1002",
            Teams:"Chelsia Vs Arsenal",
            home:0.8,
            away:1.5,
            draw:1.9
        },
        {
            time: new Date(),
            code:"df-101",
            Teams:"Man U Vs Arsenal",
            home:0.8,
            away:1.5,
            draw:2.9
        },
        {
            time: new Date(),
            code:"2051-M",
            Teams:"Mariqe Vs Al hali",
            home:0.8,
            away:1.5,
            draw:1.9
        },
        {
            time: new Date(),
            code:"x-4501",
            Teams:"Man U Vs Arsenal",
            home:0.8,
            away:1.5,
            draw:1.9
        },
        {
            time:new Date(),
            code:"x-fd4",
            Teams:"Beyrman Vs Arsenal",
            home:0.8,
            away:1.5,
            draw:1.9
        },
        {
            time: new Date(),
            code:"201-v",
            Teams:"Hillal Vs Man City",
            home:1.8,
            away:2.5,
            draw:1.9
        },
        {
            time: new Date(),
            code:"x-1002",
            Teams:"Chelsia Vs Arsenal",
            home:0.8,
            away:1.5,
            draw:1.9
        },
        {
            time: new Date(),
            code:"df-101",
            Teams:"Man U Vs Arsenal",
            home:0.8,
            away:1.5,
            draw:2.9
        },
        {
            time: new Date(),
            code:"2051-M",
            Teams:"Mariqe Vs Al hali",
            home:0.8,
            away:1.5,
            draw:1.9
        },
        {
            time: new Date(),
            code:"x-4501",
            Teams:"Man U Vs Arsenal",
            home:0.8,
            away:1.5,
            draw:1.9
        },
        {
            time: new Date(),
            code:"74-HX-2",
            Teams:"UV U Vs Man City",
            home:0.8,
            away:1.5,
            draw:1.9
        }
    ]

    useEffect(()=>{
        localStorage.setItem('matches', JSON.stringify(matchesObj))
    }, [])
    
    
    useEffect(()=>{
        const matchesData = JSON.parse(localStorage.getItem('matches'))
        setMatches({
            status:true,
            data:matchesData
        })
    }, [])

    const handleAdd = async e => {
        const id = e.target.id
        const item = await matches.data.find(item => item.code === id)
        const card = await JSON.parse(localStorage.getItem('bet-slip'))
        const newbet = JSON.stringify({
            betFor:item.Teams,
            odds:item.away,
            stack:item.stack,
            profite: 5000
        })
        const newItem = card.pop(newbet)
        // localStorage.setItem('matches', JSON.stringify(newItem))
        console.log(newItem)
    }
  
    let content
    if(matches.status){
        content = matches.data.map(match => (
            <tr>
                <td>{ match.time }</td>
                <td>{ match.code }</td>
                <td>{ match.Teams }</td>
                <td className="alert-success">{ match.home }</td>
                <td className="alert-warning">{ match.draw }</td>
                <td className="alert-danger">{ match.away }</td>
                <td className="text-right">
                    <button className="btn ml-1 btn-sm" id={ match.code } onClick={ handleAdd }><FaPlus /> Add</button>
                </td>
            </tr>
        ))
    }
    // console.table(matches.data)
    return (
        <table className="my-table table-striped">
                <thead>
                    <tr>
                        <th colSpan="3"></th>
                        <th colSpan="3" className="text-center">Odds</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className="alert-seconday">Time</th>
                        <th className="alert-seconday">Code</th>
                        <th className="alert-seconday">Teams</th>
                        <th className="alert-success">Home</th>
                        <th className="alert-warning">Draw</th>
                        <th className="alert-danger">Away</th>
                        <th className="text-center">Add</th>
                    </tr>
                </thead>
                <tbody>
                    { content }
                </tbody>
            </table>
    )
}
