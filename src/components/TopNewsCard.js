import BottomInfo from '../components/BottomInfo'

export default function TopNewsCard(props) {
    return (
        <>
            <div className="TopNewsCard">
                <img className="TopNewsImg" src={props.img} alt="TopNewsImg" />
                <div className="TNCardSub">
                    <div className="TNCardText">
                        {props.header}

                    </div>

                    <div className="TNCardText2">
                        {props.content}

                    </div>
                    <BottomInfo content="Read More" redarrow="none" greenarrow="none"/>
                </div>
            </div>
        </>
    )
}