import React from 'react'
import Entry from './Entry'

export default function Journal (data) {
    const entry = data.props[0]
    const testArray = data.props
        .map((entry, index, array) => {
            return (
                <React.Fragment key={entry.startDate}>
                    <Entry entry={entry} key={entry.imageUrl}/>
                    {index < array.length - 1 && <hr className="hr" key={entry.title}/>}
                </React.Fragment>
            )
        })

    return (
        <div className="journal">
            {testArray}
        </div>
    )
}