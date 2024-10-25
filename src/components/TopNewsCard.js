export default function FAQCard(props) {
    return (
        <>
            <div id="TopNewsCard">
                <img id="TopNewsImg" src={props.img} alt="TopNewsImg" />
                <div id="TNCardSub">
                    <div id="TNCardText">
                        {props.header}

                    </div>

                    <div id="TNCardText2">
                        {props.content}

                    </div>
                </div>
            </div>
        </>
    )
}