import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TradingViewPage = ({ isHeaderActive = true }) => {
    const coinSymbol = "BINANCE:BTCUSDT"; // Example coin symbol
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); // Key to force re-render of iframe
    const navigate = useNavigate();

    const handleRefresh = () => {
        setIsRefreshing(true);
        // Logic to refresh the chart
        setRefreshKey(prevKey => prevKey + 1); // Change key to force iframe to reload
        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000); // Simulate a refresh delay
    };

    return (
        <div className="trading-view-container">
            {isHeaderActive ?
                <header className="trading-view-header">
                    <h1 className="trading-view-title">Live Crypto, Forex, and Stocks</h1>
                    <button className={`refresh-button ${isRefreshing ? 'loading' : ''}`} onClick={handleRefresh}>
                        {isRefreshing ? 'Refreshing...' : 'Refresh'}
                    </button>
                </header>
                : <header></header>}
            <div className="trading-view-chart">
                <iframe
                    key={refreshKey} // Use key to force reload
                    src={`https://s.tradingview.com/widgetembed/?symbol=${coinSymbol}&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=Dark&style=1&timezone=Etc/UTC&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en`}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="TradingView Chart"
                />
            </div>
        </div>
    );
};

export default TradingViewPage;