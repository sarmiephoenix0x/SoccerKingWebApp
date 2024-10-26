export default function FAQCard(props) {
    return (
        <>
            <div className="FAQCard">
            <img className="FAQCardImg" src={props.img} alt="FAQCardImg" />
                <div className="FAQCardBody">
                    {props.content}
                </div>
            </div>
        </>
    )
}