import SignalsAnalysis from "../Components/SignalAnalysis";
import SignalCard from "../Components/SignalCard";

export default function Stocks() {
    return (
        <>
        <div id="SignalContainer">
                <SignalsAnalysis />
                <SignalCard/>
                
            </div>
        </>
    )
}