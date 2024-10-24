export default function ServicesCard(props) {
    return (
        <>
            <div id="ServicesCard">
                <div id="ServicesCardHeaderText">{props.header}</div>
                <div id="ServicesCardBody">
                    {props.content}
                </div>
                <img id="ServicesCardImg" src={props.img} alt="ServicesCardImg" />
            </div>
        </>
    )
}