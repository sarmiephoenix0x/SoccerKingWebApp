import ReferralCopyImg from '../images/ant-design_copy-filled.png'

export default function ReferralPage() {
    return (
        <>
            <div id="DashContainer">
                <div id="ReferralBG">
                    <div id="ReferralText">Referral Link</div>
                    <div id="ReferralCopy"><span id="ReferralCopyText">[Referral link of the user]</span><img id="ReferralCopyImg" src={ReferralCopyImg} alt="Copy" /></div>
                </div>
            </div>
        </>
    )
}