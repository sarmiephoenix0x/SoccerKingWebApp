import BottomInfo from '../components/BottomInfo'

export default function TopNewsCard(props) {
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
                    <BottomInfo content="Read More" redarrow="none" greenarrow="none"/>
                </div>
            </div>
        </>
    )
}