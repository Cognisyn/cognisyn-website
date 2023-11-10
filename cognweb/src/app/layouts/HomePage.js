import Terminal from '../components/Terminal.js'
import '../styles/HomePage.css'
import Navbar from '../components/Navbar.js' 

const Homepage = () => {
    return (
        <main className="homepage" >
        <Navbar />
        <Terminal/> 
        </main>
    )
}

export default Homepage;
