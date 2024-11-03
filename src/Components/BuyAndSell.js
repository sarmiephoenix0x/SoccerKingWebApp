export default function BuyAndSell({ content }) {
    const isBuyOrAbove50 = (content === "BUY" || (typeof content === 'number' && content >= 50));
    const backgroundColor = isBuyOrAbove50 ? "green" : "red";

    return (
        <div className="reusableItem" style={{ backgroundColor }}>
            {content} {typeof content === 'number' ? "PIPS" : ""}
        </div>
    );
}
