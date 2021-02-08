import React from 'react'
import { Card  } from 'react-bootstrap';
import GamesTable from '../GamesTable/GamesTable'

export default function Main() {
    return (
        <div>
            <Card className="content-wraper mb-1">
                <header className="my-card-header">
                    <h5>African Cap</h5>
                </header>
                <GamesTable />
            </Card>
        </div>
    )
}
