import StarImg from '../images/Star.png'

export default function ProductsCard(props) {
    return (
        <>
            <div className="ProductsCard">
                <img className="ProductsCardImg" src={props.img} alt="Img" />
                <div className="ProductsCardSub">
                    <div className="ProductsCardContent">
                        {props.content}
                        <div className="ProductsCardName">
                            {props.name}
                            <div className="ProductsCardRating">
                                {props.rating} 
                                <img className="StarImg" src={StarImg} alt="StarImg" />
                            </div>
                        </div>
                    </div>
                    <div className="ProductsCardSub2">
                        <div className="ProductsCardTag">
                            {props.pricetag}
                        </div>

                        
                    </div>
                </div>
                <div className='ProductsCardViewItem'>
                    View Item
                </div>
            </div>
        </>
    )
}