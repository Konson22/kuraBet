import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../../GlobalContext/GlobalContext'
import { FaPlus, FaRegTimesCircle } from 'react-icons/fa'
import './GamesTable.css'
import { Card, FormGroup, FormControl, Button } from 'react-bootstrap';

export default function GamesTable() {
    
    const { matches, handleAddBet } = useContext(GlobalContext)
    const [currentMatch, currentdMatch] = useState({
        status:false,
        data:null
    })
    const [showPopUp, setShowPopUp] = useState(false)
    const closePopUp = () => setShowPopUp(false)
    const openPopUp = async (e) => {
        const selectedMatch = await matches.data.find(match => match.HomeTeam === e.target.id)
        currentdMatch({
            status:true,
            data:{
                HomeTeam:selectedMatch.HomeTeam,
                AwayTeam:selectedMatch.AwayTeam,
                homeWin:selectedMatch.B365A,
                awayWin:selectedMatch.B365H,
                draw:selectedMatch.BWA
            }
        })
        setShowPopUp(true)
    }

    const haddleAddToCard = () => {
        handleAddBet(currentMatch.data)
    }
    let content
    let count = 1
    if(matches.status){
        content = matches.data.map(match => (
            <tr key={ count++ }>
                <td>{ match.Date }</td>
                <td>{ match.HomeTeam } Vs { match.AwayTeam }</td>
                <td className="alert-success">{ match.B365A }</td>
                <td className="alert-warning">{ match.B365H }</td>
                <td className="alert-danger">{ match.BWA }</td>
                <td className="text-right">
                    <span className="btn ml-1 btn-sm" id={ match.HomeTeam } onClick={ openPopUp }>Add</span>
                </td>
            </tr>
        ))
    }

    // CARD CONTENT
    let currentMatchConent
    if(currentMatch.status){
        currentMatchConent = (
            <>
            <div className="slip-card-header">
                <div>
                    <h4>{ currentMatch.data.HomeTeam }</h4>
                    <span>Home 1.5</span>
                </div>
                <h4>Vs</h4>
                <div>
                    <h4>{ currentMatch.data.AwayTeam }</h4>
                    <span>Away 2.5</span>
                </div>
            </div>
            <div className="slip-card-body">
                    <FormGroup>
                        <label>Type</label>
                            <select className="form-control">
                                <option>Home win</option>
                                <option>Away win</option>
                                <option>Draw</option>
                                <option>Both Score</option>
                                <option>Both Score</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <label>Odds</label>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup>
                            <label>Stack</label>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup>
                            <label>Profit</label>
                            <FormControl type="text" />
                        </FormGroup>
                    </div>
                    <div className="text-center mt-3">
                        <Button onClick={ haddleAddToCard }>Add to betting slip</Button>
                        <Button variant="warning mx-2">Reset</Button>
                        <Button variant="danger" onClick={ closePopUp }>Cancel</Button>
                    </div>
            </>
            )
                    
    }else{
        currentMatchConent = "Loading...."
    }
    return (
        <div className="m-2">
            <Card>
            <Card.Header className="table-header p-1 -3">
                <h4>Primuear Leaque</h4>
            </Card.Header>
            <table className="my-table table-striped">
                <thead className="alert-seconday">
                    <tr>
                        <th className="alert-seconday">Date</th>
                        <th className="alert-seconday">Teams</th>
                        <th className="alert-seconday">Home</th>
                        <th className="alert-seconday">Draw</th>
                        <th className="alert-seconday">Away</th>
                        <th className="text-center">Add</th>
                    </tr>
                </thead>
                <tbody>
                    { content }
                </tbody>
            </table>
            </Card>
            <div className={ showPopUp ? "slip-card-pop-up" : "hide-slip-card-pop-up" } >
                <div className="slip-card">
                    <div className="slip-card-close">
                        <FaRegTimesCircle className="close-btn" onClick={ closePopUp }/>
                    </div>
                    { currentMatchConent }
                    
                </div>
            </div>
        </div>

    )
}
