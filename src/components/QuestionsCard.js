import React from 'react';

export default function QuestionsCard(props) {
    return (
        <>
            <div className="QuestionsCard">
            <img className="QuestionsCardImg" src={props.img} alt="QuestionsCardImg" />
                <div className="QuestionsCardBody">
                    {props.content}
                </div>
            </div>
        </>
    )
}