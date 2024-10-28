import React from 'react';

export default function ServicesCard(props) {
    return (
        <>
            <div className="ServicesCard">
                <div className="ServicesCardHeaderText">{props.header}</div>
                <div className="ServicesCardBody">
                    {props.content}
                </div>
                <img className="ServicesCardImg" src={props.img} alt="ServicesCardImg" />
            </div>
        </>
    )
}