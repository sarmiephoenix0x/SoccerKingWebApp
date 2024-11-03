import ProfileImg from '../images/ProfileImg.png'
import { useEffect } from 'react';
import FollowButton from '../Components/FollowButton';
import ReusableItem from '../Components/ReusableItem';
import BuyAndSell from '../Components/BuyAndSell';

export default function SignalAuthor() {

    const setDonutChart = (percentage) => {
        const donutChart = document.querySelector('.donut-chart');
        const percentageText = donutChart.querySelector('.percentage');
        const labelGreen = document.querySelector('.label-green');
        const labelRed = document.querySelector('.label-red');
        const barGreen = document.querySelector('.bar-green');

        const redPercentage = 100 - percentage;

        // Update the text
        percentageText.textContent = `${percentage}%`;
        labelGreen.textContent = `${percentage}%`;
        labelRed.textContent = `${redPercentage}%`;

        // Update the background gradient to reflect the percentage
        donutChart.style.background = `conic-gradient(green 0% ${percentage}%, red ${percentage}% 100%)`;
        barGreen.style.width = `${percentage}%`;
    }

    useEffect(() => {
        setDonutChart(75);
    }, []);
    return (
        <>
            <div id="SignalAuthorContainer">
                <div id="SASub">
                    <div id="SAHorizon">
                        <div id="SAVert">
                            <img className="ProfileImg" src={ProfileImg} alt="Profile" />
                            <div id="SAPips">
                                Total pips profit:
                                <div id="PipsProfitText">
                                    +2,441
                                </div>
                            </div>
                        </div>
                        <div id="SAVert">
                        <div id="SAHorizon2">
                            <div id="SAName">
                                Jasmine
                                </div>
                                <FollowButton/>
                                </div>
                            <div id="SARanking">
                                <div id="SATimeStamp">
                                    20.10.2024 (2:00 PM)
                                </div>

                                <div id="SABio">
                                    Normal target for traded asset is (100 pips), N.B - (25 pips) can be profitable in zero spread acc. (50 pips) is assured per-trade.
                                </div>
                            </div>
                            <div id="SAHorizon3">
                    <ReusableItem content="Forex" />
                    <ReusableItem content="Crypto" />
                        <ReusableItem content="Stocks" />
                        </div>

                            <div class="bar-chart">
                                <div class="bar-green"></div>
                                <div class="label-green">75%</div>
                                <div class="label-red">25%</div>
                            </div>
                        </div>


                    </div>

                    <div id="ProfitStat">
                    Profit statistics:
                    </div>
                    <div id="SAHorizon3">
                    <ReusableItem content="Forex" />
                    <ReusableItem content="Crypto" />
                        <ReusableItem content="Stocks" />
                        </div>
                    <div class="donut-chart">
                        <div class="donut-hole">
                            <div id="SAVert">
                                <div id="percentageText">Overall rating:</div>
                                <span class="percentage">75%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="SignalViewBG">
    <table id="SignalViewTable">
        <thead>
            <tr>
                <th id="TransactionText">PAIR</th>
                <th id="DateText">TYPE</th>
                <th id="AmountText">ENTRY</th>
                <th id="ConversionText">STOP LOSS</th>
                <th id="StatusText">TAKE PROFIT</th>
                <th id="DetailsText">AMOUNT OF PROFIT</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>EURCAD</td>
                <td><BuyAndSell content="BUY"/></td>
                <td>1.51329</td>
                <td>-37.7</td>
                <td>+94.7</td>
                <td><BuyAndSell content={44.47}/></td>
            </tr>
            <tr>
                <td>USDCAD</td>
                <td><BuyAndSell content="SELL"/></td>
                <td>1.27391</td>
                <td>-20.0</td>
                <td>+50.2</td>
                <td><BuyAndSell content={30.20}/></td>
            </tr>
        </tbody>
    </table>
</div>

            </div>
        </>
    )
}