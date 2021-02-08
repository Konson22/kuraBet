import React, { useState, useEffect } from 'react'
import { Table, Card } from 'react-bootstrap'
import { FaTicketAlt, FaDonate, FaTimesCircle } from 'react-icons/fa'
import './Sidebar.css'


export default function RightSidebar() {
    const [bet, setBet] = useState({
        status:false,
        data:null
    })

    const bettData = [
        {
            betFor:"Man U Vs Chelsia",
            odds:1.4,
            stack:250,
            profite:500
        },
        {
            betFor:"Al Hali Vs Hilal",
            odds:1.4,
            stack:250,
            profite:500
        },
        {
            betFor:"South T Vs Chelsia",
            odds:3.4,
            stack:500,
            profite:8500
        },
        {
            betFor:"Beryen Vs Arsenal",
            odds:1.4,
            stack:250,
            profite:500
        },
    ]
    useEffect(()=>{
        localStorage.setItem('bet-slip', JSON.stringify(bettData))
    }, [bettData])
    
    useEffect(()=>{
        const betSlip = JSON.parse(localStorage.getItem('bet-slip'))
        setBet({
            status:true,
            data:betSlip
        })
    }, [])

    let tickit
    if(bet.status){
        if(bet.data){
            tickit = bet.data.map(bet => (
                <tr>
                    <td><FaTimesCircle className="text-danger" /> { bet.betFor }</td>
                    <td>{ bet.odds }</td>
                    <td>{ bet.stack }</td>
                    <td>{ bet.profite }</td>
                </tr>
            ))
            // console.log(bet.data)
        }
    }
    return (
        <aside className="right-side-bar">
            <div className="user-data-container">
                <div className="user-data text-center">
                    <div className="">
                        <h4>Creadit</h4>
                        <h3>250</h3>
                    </div>
                    <FaDonate className="icon" />
                </div>
                <div className="user-data text-center">
                    <div className="">
                        <h4>BET SLIP</h4>
                        <h3>2</h3>
                    </div>
                    <FaTicketAlt className="icon" />
                </div>
            </div>
            <Card className="pb-3">
                <Card.Header className="my-card-header">
                    <h5>BET SLIP</h5>
                </Card.Header>
                <Table className="table-striped">
                    <thead className="sub-heaer">
                        <tr>
                            <th>Back ( bet for )</th>
                            <th>Odds</th>
                            <th>Stack</th>
                            <th>Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                       { tickit }
                    </tbody>
                </Table>
                <div className="text-center">
                    <button className="btn btn-info btn-sm">Cancel All</button>
                    <button className="btn btn-danger btn-sm mx-2">Place Bet</button>
                    <button className="btn btn-secondary btn-sm">Cancell</button>
                </div>
            </Card>
        </aside>
    )
}
