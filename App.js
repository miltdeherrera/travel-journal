import React from 'react'

import TitleBar from './components/TitleBar'
import Journal from './components/Journal'

import data from './data'

export default function App () {
    return (
        <div>
            <TitleBar />
            <Journal props={data}/>            
        </div>
    )
}