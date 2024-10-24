export default function OverlayNavBar() {
    return (
        <>
            <div id="OverlayNavBarContent">
                            <div id="HomeText">
                                Home
                            </div>
                            <div id="AboutText">
                                About
                            </div>
                            <div id="FAQText">
                                FAQ
                            </div>
                            <div id="ContactUSText">
                                Contact US
                            </div>
                            <div id="NavBarAuthButs">
                                <div id="LogINText" onClick={GoToLoginIn}>
                                    Log In
                                </div>
                                <div id="CreateNewAccountText" onClick={GoToSignUp}>
                                    Create New Account
                                </div>
                            </div>
                        </div>
        </>
    )
}