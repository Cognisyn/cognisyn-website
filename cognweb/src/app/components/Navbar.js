import '../styles/navbar.css'
import icon from '../assets/devicon_linux.png'

const Navbar = () => {
    return (
        <main  className ="navbar">
        <div className ='navbar-title'>COGNISYN</div>
        <div className ='navbar-docs'>Docs</div>
        <div className ='navbar-cogterm'>Cogterm </div>
        <button className ='navbar-button'>
        <img src={icon} alt="linux-icon" className="navbar-button-image" />
        <div className = "navbar-button-content" >Download</div>
        </button>

        </main>
    )
}


export default Navbar;
