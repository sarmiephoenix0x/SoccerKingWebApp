import StatCard from '../Components/statCard'
import NotificationImg from '../images/Notification.png'
import ReferralCopyImg from '../images/ant-design_copy-filled.png'
import StatImg from '../images/Balance.png'
import StatImg2 from '../images/Package.png'
import StatImg3 from '../images/Deposit.png'
import StatImg4 from '../images/Signals.png'
import StatImg5 from '../images/Transaction.png'
import StatImg6 from '../images/Referral.png'

export default function DashBoardPage() {
    return (
        <>
            <div id="DashContainer">
                <div id="NotificationBG">
                    <div id="NotificationText"><span>Please Allow/Reset Browser Notification</span><img id="NotificationImg" src={NotificationImg} alt="Notification" /></div>
                    <div id="NotificationText2">If you want to get push notification then you have to allow notification from your browser</div>
                </div>

                <div id="ReferralBG">
                    <div id="ReferralText">Referral Link</div>
                    <div id="ReferralCopy"><span id="ReferralCopyText">[Referral link of the user]</span><img id="ReferralCopyImg" src={ReferralCopyImg} alt="Copy" /></div>
                </div>
                <div id="StatOrder">
                    <StatCard img={StatImg} title="Total Balance" content="$0.00" />
                    <StatCard img={StatImg2} title="Package" content="N/A (Validity)" />
                    <StatCard img={StatImg3} title="Total Deposit" content="$0.00" />
                    <StatCard img={StatImg4} title="Total Signals" content="0" />
                    <StatCard img={StatImg5} title="Total Transaction" content="0" />
                    <StatCard img={StatImg6} title="Total Referral" content="0" />
                </div>

                <div id="LatestTransaction">
                    <div id="LatestTransactionText">
                        Latest Transaction
                    </div>
                    <div id="LatestTransactionViewBG">
                        <div id="LatestTransactionViewTab">
                            <div id="TRXText">TRX</div>
                            <div id="TransactedText">TRANSACTED</div>
                            <div id="AmountText">AMOUNT</div>
                            <div id="PostBalanceText">POST BALANCE</div>
                            <div id="DetailsText">DETAILS</div>
                        </div>
                        <div id="LatestTransactionViewBGText">
                        Data not found
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}