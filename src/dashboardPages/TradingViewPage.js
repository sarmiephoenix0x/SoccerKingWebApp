import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TradingViewPage = () => {
    const coinSymbol = "BINANCE:BTCUSDT"; // Example coin symbol
    const [isRefreshing, setIsRefreshing] = useState(false);
    const navigate = useNavigate();

    const handleRefresh = () => {
        setIsRefreshing(true);
        // Logic to refresh the chart (if needed)
        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000); // Simulate a refresh delay
    };

    return (
        <div className="trading-view-container">
            <header className="trading-view-header">
                <h1 className="trading-view-title">Live Crypto, Forex, and Stocks</h1>
                <button className={`refresh-button ${isRefreshing ? 'loading' : ''}`} onClick={handleRefresh}>
                    {isRefreshing ? 'Refreshing...' : 'Refresh'}
                </button>
            </header>
            <div className="trading-view-chart">
                <iframe
                    src={`https://s.tradingview.com/widgetembed/?symbol=${coinSymbol}&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=Dark&style=1&timezone=Etc/UTC&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en`}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="TradingView Chart"
                />
            </div>
        </div>
    );
};

export default TradingViewPage;