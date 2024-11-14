import React, { useEffect, useState } from 'react';
import ProfileImg from '../images/ProfileImg.png';
import FollowButton from '../Components/FollowButton';
import ReusableItem from '../Components/ReusableItem';
import BuyAndSell from '../Components/BuyAndSell';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function SignalAuthor() {
    const location = useLocation();
    const { signal } = location.state || {}; // Get the signal object from the passed state
    const authorId = signal?.author_id; // Extract authorId from the signal object
    const [authorDetails, setAuthorDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAuthorDetails = async () => {
            if (!authorId) {
                console.error("Author ID is not available");
                setLoading(false);
                return;
            }
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await axios.get(`https://signal.payguru.com.ng/api/signal/author?id=${authorId}`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}` // Include the token in the headers
                    }
                });
                setAuthorDetails(response.data);
            } catch (error) {
                console.error("Error fetching author details:", error);
                if (error.response && error.response.status === 401) {
                    console.error("Unauthorized request. Please check your token.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchAuthorDetails();
    }, [authorId]);

    if (loading) {
        return <p>Loading...</p>; // Show loading indicator
    }

    if (!authorDetails) {
        return <p>No author data available.</p>; // Handle case where no data is available
    }

    const { name, profile_picture, signals } = authorDetails;

    return (
        <>
            <div id="SignalAuthorContainer">
                <div id="SASub">
                    <div id="SAHorizon">
                        <div id="SAVert">
                            <img className="ProfileImg" src={profile_picture || ProfileImg} alt="Profile" />
                            <div id="SAPips">
                                Total pips profit:
                                <div id="PipsProfitText">
                                    {signals || 0} {/* Display total pips profit */}
                                </div>
                            </div>
                        </div>
                        <div id="SAVert">
                            <div id="SAHorizon2">
                                <div id="SAName">
                                    {name || 'Unknown Author'}
                                </div>
                                <FollowButton />
                            </div>
                            <div id="SARanking">
                                5 Reviews
                            </div>
                            <div id="SABio">
                                Normal target for traded asset is (100 pips), N.B - (25 pips) can be profitable in zero spread acc. (50 pips) is assured per-trade.
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
                    <div className="donut-chart">
                        <div className="donut-hole">
                            <div id="SAVert">
                                <div id="percentageText">Overall rating:</div>
                                <span className="percentage">75%</span>
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
                            {/* Assuming you have a way to fetch or display the author's signals */}
                            {/* Example static data for demonstration */}
                            <tr>
                                <td>EURCAD</td>
                                <td ><BuyAndSell content="BUY" /></td>
                                <td>1.51329</td>
                                <td>-37.7</td>
                                <td>+94.7</td>
                                <td><BuyAndSell content={44.47} /></td>
                            </tr>
                            <tr>
                                <td>USDCAD</td>
                                <td><BuyAndSell content="SELL" /></td>
                                <td>1.27391</td>
                                <td>-20.0</td>
                                <td>+50.2</td>
                                <td><BuyAndSell content={30.20} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}