import React from 'react';
import CoinImg from '../images/logos_bitcoin.png'; // Replace with dynamic image source
import DotImg from '../images/Dot.png';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewAnalysis = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Location State:', location.state);
    const { signal } = location.state || {};

    if (!signal) {
        return <p>No signal data available.</p>; // Handle the case where signal is undefined
    }

    const GoToSignalAuthor = (signal) => {
        document.getElementById("DashBoardText2").innerHTML = "Signal Author";
        document.body.style.overflowY = 'auto';
        navigate("/DashBoard/SignalAuthor", { state: { signal } }); // Pass the signal object
    };

    return (
        <div id="SignalContainer">
            <div id="VASub">
                <img
                    className="CoinImg2"
                    src={signal.coin_image || CoinImg}
                    alt="CoinImage"
                />
                <div id="VAVert">
                    <div id="VACoinName">
                        {signal.coin} {signal.pair ? `(${signal.pair})` : ''}
                    </div>
                    <div id="VAHorizon">
                        <div id="VATimeStamp">
                            {signal.created_at}
                        </div>
                        <img className="DotImg" src={DotImg} alt="Dot" />
                        <div id="VAAuthorName" onClick={() => GoToSignalAuthor(signal)}>
                            By {signal.author_name}
                        </div>
                    </div>
                </div>
            </div>

            <div id="VASub2">
                <div id="VASub2Text">
                    Predicted Price Movement:
                </div>
                <div id="VAPriceText">
                    {signal.trend ? `${signal.trend}: $${signal.current_price}` : `No Trend: $${signal.current_price}`}
                </div>
            </div>

            <div id="VASub3">
                <div id="VASub2Text2">
                    Analysis:
                </div>
                <div id="VAAnalysisText">
                    {signal.insight ? signal.insight : "No Insight"}
                </div>
            </div>
        </div>
    );
};

export default ViewAnalysis;