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

                    <div id="LatestTransactionViewBG">
                        <table id="LatestTransactionViewTable">
                            <thead>
                                <tr>
                                    <th id="TransactionText">TRANSACTION</th>
                                    <th id="DateText">DATE</th>
                                    <th id="AmountText">AMOUNT</th>
                                    <th id="ConversionText">CONVERSION</th>
                                    <th id="StatusText">STATUS</th>
                                    <th id="DetailsText">DETAILS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="6" id="LatestTransactionViewBGText">Data not found</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}