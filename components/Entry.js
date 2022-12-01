import React from 'react'

export default function Entry (entry) {
    const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = entry.entry
    
    return (
        <div className="entry">
            <img src={imageUrl} className="entry--photo"/>
            <div className="entry--info-box">
                <div className="entry--map-row">
                    <div className="entry--map-row--pin">
                        <img src="../images/pin.svg" />
                        {location}</div>
                    <div className="entry--map-row--link"><a href={googleMapsUrl}>View on Google Maps</a></div>
                </div>
                <h2 className="entry--title">{title}</h2>
                <div className="entry--date-range">{startDate} - {endDate}</div>
                <p className="entry--text">{description}</p>
            </div>
        </div>
    )
}