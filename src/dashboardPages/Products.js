import NewsImg from '../images/NewsImg.png'
import ProductsCard from '../components/ProductsCard'
import FireImg from '../images/Fire.png'

export default function Products() {
    return (
        <>
        <div id="ProductsMain">
                <div id="ProductsMainSub">
                    <div id="ProductsMainSubText">
                        Popular This Week
                        <img id="FireImg2" src={FireImg} alt="FireImg" />
                    </div>
                    <div id="ProductsMainSub2">
                        <ProductsCard
                            content="Item"
                            name="Random Name"
                            pricetag="$50"
                            rating="5.0"
                            img={NewsImg}
                        />
                    </div>
                </div>
                </div>
        </>
    )
}