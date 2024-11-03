import CoinImg from "../images/cryptocurrency-color_usdt.png"
import ProgressImg from "../images/carbon_in-progress.png"
import DropDownImg from "../images/gridicons_dropdown.png"
import ChartImg from "../images/material-symbols_pie-chart.png"
import { useNavigate, useLocation } from 'react-router-dom';

export default function SignalCard() {
    const navigate = useNavigate();


    const GoToViewAnalysis = () => {
        document.body.style.overflowY = 'auto';
        navigate("/DashBoard/ViewAnalysis");
        document.getElementById("DashBoardText2").innerHTML = "View Analysis";
    };
    return (
        <>
            <div className="SignalsCardContainer">
                <div className="SignalsCard">
                    <div className="SCSub">
                        <div className="SCSubText">
                            Opened
                        </div>
                        <div className="SCSubText2">
                            Jan 18, 1:40 PM
                        </div>
                    </div>
                    <div className="SCSub">
                        <div className="SCSubText">
                            <div className="CoinDets">
                                <img className="CoinImg" src={CoinImg} alt="CoinImage" />
                                <div className="CoinTrend">
                                    LONG
                                </div>
                                <div className="CoinName">
                                    USDT
                                </div>
                            </div>
                        </div>
                        <div className="SCSubText2">
                            <div className="CoinProgress">
                                <div className="ProgressText">
                                    In progress
                                </div>
                                <img className="ProgressImg" src={ProgressImg} alt="ProgressImage" />
                            </div>
                        </div>
                    </div>
                    <div className="SCSub">
                        <div className="SCSubText">
                            Entry Price:
                        </div>
                        <div className="SCSubText2">
                            0.14
                        </div>
                    </div>
                    <div className="SCSub">
                        <div className="SCSubText">
                            Stop Loss 40%:
                        </div>
                        <div className="SCSubText2">
                            0.1
                        </div>
                    </div>
                    <div className="SCSub2">
                        <div className="SCSubText">
                            Current Price
                        </div>
                        <div className="SCSubText2">
                            0.0903
                        </div>
                        <div className="SCSubText3">
                            -35.5%
                            <img className="DropDownImg" src={DropDownImg} alt="DropDown" />
                        </div>
                    </div>
                    <div className="SCSub">
                        <div className="SCSubText4" onClick={GoToViewAnalysis}>
                            View Analysis
                        </div>
                        <div className="SCSubText5">
                            Live Chart
                            <img className="ChartImg" src={ChartImg} alt="Chart" />
                        </div>
                    </div>
                </div>
                <hr class="dotted-divider" />
            </div>
        </>
    )
}