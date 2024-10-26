import StarImg from '../images/Star.png'

export default function ProductsCard(props) {
    return (
        <>
            <div className="ProductsCard">
                <img className="NewsImg" src={props.img} alt="NewsImg" />
                <div className="ProductsCardSub">
                    <div className="ProductsCardText">
                        {props.content}
                    </div>
                    <div className="ProductsCardSub2">
                        <div className="ProductsTag">
                            {props.pricetag}
                        </div>

                        <img className="StarImg" src={StarImg} alt="StarImg" />
                    </div>
                </div>
            </div>
        </>
    )
}