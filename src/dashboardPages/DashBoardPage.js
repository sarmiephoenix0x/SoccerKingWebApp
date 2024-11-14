import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [totalSignals, setTotalSignals] = useState(0);
    const [balance, setBalance] = useState('$0.00');
    const [profilePhoto, setProfilePhoto] = useState('');

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            try {
                const accessToken = localStorage.getItem('accessToken'); // Adjust based on your storage method
                const response = await axios.get('https://signal.payguru.com.ng/api/details', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (response.status === 200) {
                    const userData = response.data['0'];
                    const totalSignals = response.data['total_signals'];
                    const profilePhoto = response.data['profile_photo'];

                    // Update state with fetched data
                    setTotalSignals(totalSignals);
                    setBalance(userData.balance || '$0.00'); // Assuming userData has a balance field
                    setProfilePhoto(profilePhoto);
                } else {
                    setErrorMessage('Failed to load details');
                }
            } catch (error) {
                setErrorMessage('Failed to load data. Please check your network connection.');
                console.error('Exception caught:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [setLoading]);


    if (errorMessage) {
        return <div>{errorMessage}</div>;
    }
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
                    <StatCard img={StatImg} title="Total Balance" content={balance} />
                    <StatCard img={StatImg2} title="Package" content="N/A (Validity)" />
                    <StatCard img={StatImg3} title="Total Deposit" content="$0.00" />
                    <StatCard img={StatImg4} title="Total Signals" content={totalSignals.toString()} />
                    <StatCard img={StatImg5} title="Total Transaction" content="0" />
                    <StatCard img={StatImg6} title="Total Referral" content="0" />
                </div>

                <div id="LatestTransaction">
                    <div id="LatestTransactionText">
                        Latest Transaction
                    </div>
                    <div id="LatestTransactionViewBG">
                        <table id="LatestTransactionViewTable">
                            <thead>
                                <tr>
                                    <th id="TRXText">TRX</th>
                                    <th id="TransactedText">TRANSACTED</th>
                                    <th id="AmountText">AMOUNT</th>
                                    <th id="PostBalanceText">POST BALANCE</th>
                                    <th id="DetailsText">DETAILS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="5" id="LatestTransactionViewBGText">Data not found</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}