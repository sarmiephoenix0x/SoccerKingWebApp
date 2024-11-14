import React, { useEffect, useState } from 'react';
import { fetchSignals } from '../Components/signalService'; // Adjust the import path as necessary
import CoinImg from "../images/cryptocurrency-color_usdt.png";
import ProgressImg from "../images/carbon_in-progress.png";
import DropDownImg from "../images/gridicons_dropdown.png";
import ChartImg from "../images/material-symbols_pie-chart.png";
import { useNavigate } from 'react-router-dom';

export default function SignalCard({ type }) {
    const navigate = useNavigate();
    const [signals, setSignals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [expandedSignalIndex, setExpandedSignalIndex] = useState(null); // For dropdown functionality

    useEffect(() => {
        const loadSignals = async () => {
            try {
                const result = await fetchSignals(type, page);
                console.log('Fetched Signals:', result); // Log the fetched signals
                setSignals(prevSignals => [...prevSignals, ...result.data]);
                setHasMore(result.pagination.next_page_url !== null);
                document.body.style.overflowY = 'auto';
            } catch (error) {
                console.error('Error fetching signals:', error);
            } finally {
                setLoading(false);
            }
        };

        loadSignals();
    }, [type, page]);

    const GoToViewAnalysis = (signalId) => {
        document.body.style.overflowY = 'auto';
        navigate("/DashBoard/ViewAnalysis", { state: { signalId } });
        document.getElementById("DashBoardText2").innerHTML = "View Analysis";
    };

    const toggleExpand = (index) => {
        setExpandedSignalIndex(expandedSignalIndex === index ? null : index);
    };

    const GoToLiveChart = () => {
       navigate("/DashBoard/TradingViewPage"); 
    }

    return (
        <div className="SignalsCardContainer">
            {loading ? (
                <p>Loading...</p>
            ) : (
                signals.map((signal, index) => {
                    // Parse the targets JSON string
                    const targets = JSON.parse(signal.targets);
                    return (
                        <div className="SignalsCard" key={signal.id}>
                            <div className="SCSub">
                                <div className="SCSubText">Opened</div>
                                <div className="SCSubText2">{signal.created_at || 'Unknown Date'}</div>
                            </div>
                            <div className="SCSub">
                                <div className="SCSubText">
                                    <div className="CoinDets">
                                        <img className="CoinImg" src={CoinImg} alt="CoinImage" />
                                        <div className="CoinTrend">{signal.trend}</div>
                                        <div className="CoinName">{signal.coin}</div> {/* Use signal.coin instead of coinName */}
                                    </div>
                                </div>
                            </div>
                            <div className="SCSub">
                                <div className="SCSubText">Entry Price:</div>
                                <div className="SCSubText2">{signal.entry_price}</div> {/* Use entry_price */}
                            </div>
                            <div className="SCSub">
                                <div className="SCSubText">Stop Loss:</div>
                                <div className="SCSubText2">{signal.stop_loss}</div> {/* Use stop_loss */}
                            </div>
                            <div className="SCSub2">
                                <div className="SCSubText">Current Price</div>
                                <div className="SCSubText3" onClick={() => toggleExpand(index)}>
                                    {signal.current_price}
                                </div>
                                <img className="DropDownImg" src ={DropDownImg} alt="DropDown" onClick={() => toggleExpand(index)} />
                            </div>
                            {expandedSignalIndex === index && (
                                <div className="CurrentPriceDetails">
                                    {Object.entries(targets).map(([key, value]) => (
                                        <div key={key} className="Target">
                                            <div className="SCSubText">{key.replace(/_/g, ' ').toUpperCase()}</div>
                                            <div className="SCSubText">{value}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="SCSub">
                                <div className="SCSubText4" onClick={() => GoToViewAnalysis(signal.id)}>View Analysis</div>
                                <div className="SCSubText5" onClick={GoToLiveChart}>
                                    Live Chart
                                    <img className="ChartImg" src={ChartImg} alt="Chart" />
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
            {hasMore && !loading && (
                <button className="loadMoreButton" onClick={() => setPage(prevPage => prevPage + 1)}>Load More</button>
            )}
            <hr className="dotted-divider" />
        </div>
    );
} 
