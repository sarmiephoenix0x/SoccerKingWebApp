import CoinImg from '../images/logos_bitcoin.png'
import DotImg from '../images/Dot.png'

export default function ViewAnalysis() {
    return (
        <>
        <div id="SignalContainer">
                <div id="VASub">
                    <img className="CoinImg2" src={CoinImg} alt="CoinImage" />
                    
                    <div id="VAVert">
                    <div id="VACoinName">
                    Bitcoin (BTC)
                        </div>
                        <div id="VAHorizon">
                    <div id="VATimeStamp">
                    20.10.2024 (2:00 PM)  
                        </div>
                        
                    <img className="DotImg" src={DotImg} alt="Dot" />
                    <div id="VAAuthorName">
                    By Jasmine 
                        </div>
                        </div>
                    </div>
                    
                </div>

                <div id="VASub2">
                    <div id="VASub2Text">
                    Predicted Price Movement:
                        </div>
                        
                    <div id="VAPriceText">
                    BTC: $30,000  
                        </div>
                </div>
                
                <div id="VASub2">
                    <div id="VASub2Text2">
                    Analysis:
                        </div>
                        
                    <div id="VAAnalysisText">
                    Bitcoin (BTC) enters this week with strong momentum after hitting a new high of $32,000 in the past month. However, it has been experiencing increased volatility, pulling back slightly to the $30,000 level due to recent regulatory concerns. Despite, the pullback, the coin remains resilient, holding strong above key support levels.  
                        </div>
                    </div>
            </div>
        </>
    )
}