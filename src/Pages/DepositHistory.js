import TransactionSearchImg from '../images/searchImg.png'

export default function DepositHistory() {
    return (
        <>
            <div id="DashContainer2">
                <div id="TransactionSearchPadding">
                    <div id="TransactionSearchBG"><input id="TransactionSearch" type="text" placeholder='Search by transaction' /><img id="TransactionSearchImg" src={TransactionSearchImg} alt="TransactionSearch" /></div>
                </div>
                <div id="LatestTransaction2">
                    <div id="LatestTransaction2Text">
                        Latest Transaction
                    </div>
                    <div id="LatestTransaction2ViewBG">
                        <div id="LatestTransaction2ViewTab">
                            <div id="TransactionText">TRANSACTION</div>
                            <div id="DateText">DATE</div>
                            <div id="AmountText">AMOUNT</div>
                            <div id="ConversionText">CONVERSION</div>
                            <div id="StatusText">STATUS</div>
                            <div id="DetailsText">DETAILS</div>
                        </div>
                        <div id="LatestTransaction2ViewBGText">
                            Data not found
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}