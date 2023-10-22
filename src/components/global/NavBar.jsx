import logo from "../../res/logo.png"
import "../../styles/global/Navbar.scss"
import { useNavigate } from "react-router-dom";

function NavBar() {

    const nav = useNavigate()

    return (
        <>
            <div className="navbar">
                <div className="logo" onClick={() => { nav("/home") }}>
                    <img id="logo-img" src={logo} height={60} alt="" />
                    {/* <img id="smart-bulb" src={bulb} alt="smart" height={23} /> */}
                    <span id="logo-title">Smart<span id="logo-title-1">Quiz</span></span>
                </div>

                <div className="navigation">
                    <div
                        className="home diff"
                        title="Home"
                        onClick={() => {
                            nav("/home")
                        }}
                    >
                        <span style={{ fontWeight: "500" }}>home</span>
                    </div>
                    <div
                        className="dashboard diff"
                        title="Dashboard"
                        onClick={() => {
                            nav("/dashboard")
                        }}>
                        <span>dashboard</span>
                    </div>
                    <div
                        className="settings diff"
                        title="Settings"
                        onClick={() => {
                            nav("/404")
                        }}>
                        <span >settings</span>
                    </div>
                    <div
                        className="account"
                        title="Account"
                        onClick={() => {
                            nav("/account")
                        }}
                    >
                        <div className="profile-pic">
                            <span className="material-symbols-outlined ">account_circle</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr id="navbar-sep" />
        </>
    )
}
export default NavBar