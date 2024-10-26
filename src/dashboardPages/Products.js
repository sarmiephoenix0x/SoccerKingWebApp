import NewsImg from '../images/NewsImg.png'
import ProductsCard from '../components/ProductsCard'

export default function Products() {
    return (
        <>
        <div id="ProductsMain">
                <div id="ProductsMainSub">
                    <div id="ProductsMainSubText">
                        Featured News
                    </div>
                    <div id="ProductsMainSub2">
                        <ProductsCard
                            content="Soccer Kingdom Item"
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