export default function PackageCard(props) {
    return (
        <>
            <div id="PackagesBG">
                <div id="PackagesBGHeader">
                    {props.title}
                </div>
                <div id="PackagesBGPrice">
                    {props.price}
                </div>
                <div id="PackagesContentBG">
                    <img id="TickImg" src={props.img} alt="Tick" />
                    <span id="PackagesContentText">{props.content1}</span>
                </div>
                <div id="PackagesContentBG">
                    <img id="TickImg" src={props.img} alt="Tick" />
                    <span id="PackagesContentText">{props.content2}</span>
                </div>
                <div id="PackagesContentBG">
                    <img id="TickImg" src={props.img} alt="Tick" />
                    <span id="PackagesContentText">{props.content3}</span>
                </div>
                <div id="PackagesContentBG">
                    <img id="TickImg" src={props.img} alt="Tick" />
                    <span id="PackagesContentText">{props.content4}</span>
                </div>
                <div id="PackagesContentBG">
                    <img id="TickImg" src={props.img} alt="Tick" />
                    <span id="PackagesContentText">{props.content5}</span>
                </div>
                <div id="PackagesButtonBG">
                    <div id="PackagesButton">
                        Choose Package
                    </div>
                </div>
            </div>
        </>
    )
}