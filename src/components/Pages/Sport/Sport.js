import React from 'react'

import GamesTable from './GamesTable/GamesTable'
import PrimumLeague from './League/PrimumLeague'
import SportNav from './SportNav'
import './Sport.css'

export default function Sport() {
    return (
        <>
        <SportNav />
        <GamesTable />
        <PrimumLeague />
        <GamesTable />
        <PrimumLeague />
        </>
    )
}
