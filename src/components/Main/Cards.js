import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

export default function Cards() {
    return (
        <Row className="m-0 p-0">
            <Col md={6}>
                <Card className="text-center">
                    <h4>Credit</h4>
                    <h1>20</h1>
                    
                </Card>
            </Col>
            <Col md={6}>
                <Card className="text-center">
                    <h4>Tickites</h4>
                    <h1>2</h1>
                    
                </Card>
            </Col>
        </Row>
    )
}
