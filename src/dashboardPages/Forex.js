import SignalsAnalysis from "../Components/SignalAnalysis";
import SignalCard from "../Components/SignalCard";

export default function Forex() {
    return (
        <>
            <div id="SignalContainer">
                <SignalsAnalysis />
                <SignalCard type="forex" />
            </div>
        </>
    )
}