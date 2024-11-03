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
            </div>
        </>
    )
}