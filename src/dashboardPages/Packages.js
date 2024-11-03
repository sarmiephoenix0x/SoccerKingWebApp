import PackageImg from '../images/mdi_tick-decagram.png'
import PackageCard from '../Components/packageCard'

export default function Package() {
    return (
        <>
            <div id="DashContainer2">
                <div id="PackagesHeader">
                    <div id="PackagesHeaderText">Our Packages</div>
                    <div id="PackagesHeaderText2">
                        Unlock Daily Forex Signals
                    </div>
                </div>
                <div id="PackagesOrder">
                    <PackageCard img={PackageImg} title="Basic" price="$50.00" content1="5-7 Signals send daily" content2="85% Success rate" content3="Entry take profit & stop loss" content4="Amount to risk per trade" content5="Risk reward ratio" />
                    <PackageCard img={PackageImg} title="Golden" price="$59.00" content1="3-5 Signals send daily" content2="55% Success rate" content3="Entry take profit & stop loss" content4="Amount to risk per trade" content5="Risk reward ratio" />
                    <PackageCard img={PackageImg} title="Silver" price="$70.00" content1="30-50 Signals send daily" content2="99% Success rate" content3="Entry take profit & stop loss" content4="Amount to risk per trade" content5="Risk reward ratio" />
                    <PackageCard img={PackageImg} title="Platinum" price="$99.00" content1="5-15 Signals send daily" content2="70% Success rate" content3="Entry take profit & stop loss" content4="Amount to risk per trade" content5="Risk reward ratio" />
                    <PackageCard img={PackageImg} title="Advance" price="$100.00" content1="5-10 Signals send daily" content2="90% Success rate" content3="Entry take profit & stop loss" content4="Amount to risk per trade" content5="Risk reward ratio" />
                    <PackageCard img={PackageImg} title="Premium" price="$150.00" content1="30-50 Signals send daily" content2="95% Success rate" content3="Entry take profit & stop loss" content4="Amount to risk per trade" content5="Risk reward ratio" />
                </div>
            </div>
        </>
    )
}