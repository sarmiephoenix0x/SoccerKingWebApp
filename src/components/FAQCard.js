export default function FAQCard(props) {
    return (
        <>
            <div id="FAQCard">
            <img id="FAQCardImg" src={props.img} alt="FAQCardImg" />
                <div id="FAQCardBody">
                    {props.content}
                </div>
            </div>
        </>
    )
}