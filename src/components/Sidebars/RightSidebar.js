import React, { useContext } from 'react'
import { Table, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaTicketAlt, FaDonate, FaTimesCircle } from 'react-icons/fa'
import { GlobalContext } from '../GlobalContext/GlobalContext'
import './Sidebar.css'

export default function RightSidebar() {
    const { bet, clearSlipCard } = useContext(GlobalContext)

    let tickit, count = 1
    if(bet.status){
        if(bet.data){
            tickit = bet.data.map(bet => (
                <tr key={ count++ }>
                    <td><FaTimesCircle className="text-danger" /> { bet.HomeTeam } VS { bet.AwayTeam }</td>
                    <td>{ bet.homeWin }</td>
                    <td>{ bet.stack }</td>
                </tr>
            ))
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
                        <h3>{ bet.data.length }</h3>
                    </div>
                    <FaTicketAlt className="icon" />
                </div>
            </div>
            <Card className="pb-3">
                <Card.Header className="my-card-header">
                    <h5>BET SLIP</h5>
                </Card.Header>
                <table className="table table-striped">
                    <thead className="sub-heaer">
                        <tr>
                            <th>Teams</th>
                            <th>bet for</th>
                        </tr>
                    </thead>
                    <tbody>
                       { tickit }
                    </tbody>
                </table>
                <div className="text-center">
                    <button className="btn btn-info btn-sm" onClick={ clearSlipCard }>Cancel All</button>
                    <Link className="btn btn-danger btn-sm mx-2" to="/checout">Place Bet</Link>
                    <button className="btn btn-secondary btn-sm">Cancell</button>
                </div>
            </Card>
        </aside>
    )
}
