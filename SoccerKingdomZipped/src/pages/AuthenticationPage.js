import EllipseImg from '../images/Ellipse 6.png';
import EllipseImg2 from '../images/Ellipse 5.png';
import { Outlet } from 'react-router-dom';

export default function AuthenticationPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div id="Elilipse"><img id="EllipseImg" src={EllipseImg} alt='EllipseImg' /></div>
            <form onSubmit={handleSubmit}>
                <div id="ModalContainer">
                    <div id="Modal">
                        <Outlet />
                    </div>
                </div>
            </form>
            <div id="Elilipse2"><img id="EllipseImg2" src={EllipseImg2} alt='EllipseImg2' /></div>
        </>
    )
}