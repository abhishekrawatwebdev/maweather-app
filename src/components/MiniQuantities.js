import React from 'react'

const MiniQuantities = (props) => {
    return (
        <div className="humidity">
            <div className="humiditylogo">
                <img src={props.img} alt="entity" />
            </div>
            <p>{props.name}</p>
            <p><span id="humidity">{props.quantity}</span>{props.unit}</p>
        </div>
    )
}

export default MiniQuantities