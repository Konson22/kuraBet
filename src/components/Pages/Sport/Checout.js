import React, { useContext, useState } from 'react'
import { Card, Row,  Table, Col, Form, FormGroup, FormControl } from 'react-bootstrap'
import { GlobalContext } from '../../GlobalContext/GlobalContext'

export default function Checout() {
    const { bet } = useContext(GlobalContext)
    const [stack, setStack] = useState(0)

    let content, count = 1
    if(bet.status){
        content = bet.data.map(match => (
            <tr key={ count++ }>
                 <td>12/01/2021</td>
                 <td>{ match.HomeTeam } Vs { match.AwayTeam }</td>
                 <td>1X</td>
                 <td>{ match.awayWin }</td>
            </tr>
        ))
    }

    const totalOdds = Math.floor(bet.data.map(bet => bet.awayWin).reduce((o, a) => +o + +a, 0))
    const handleStack = e => {
        setStack(e.target.value)
    }
    // console.log(stack)

    return (
        <Card className="m-2">
        <Card.Body>
            <Row>
            <Col md={6}>
                <h5>Selected Matches</h5>
                <Table>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Matches</td>
                            <td>Bet for</td>
                            <td>Odds</td>
                        </tr>
                    </thead>
                    <tbody>
                        { content }
                    </tbody>
                </Table>
                <h4>Payment details</h4>
                <p>Total matches <b>{bet.data.length } </b></p>
                <p>Total Odds <b>{ totalOdds } </b></p>
                <p>Poible profit <b>{ totalOdds * stack} </b></p>
                <Form>
                    <FormGroup>
                        <FormControl type="text" placeholder="Stack" onChange={ handleStack }/>
                    </FormGroup>
                </Form>
            </Col>
            <Col md={6}>
            </Col>
            </Row>
        </Card.Body>
        </Card>
    )
}
