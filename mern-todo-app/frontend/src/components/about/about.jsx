import Navbar from '../../components/navbar/navbar.jsx'
import '../about/about.css'
import Footer from '../footer/footer.jsx'

const About = () => {
    return(
        <>
        <Navbar />
            <div className= "about d-flex justify-content-center align-items-center">
                <div className = "container">
                    <div className= "d-flex">
                    <h1 className="aboutUS">About Us</h1>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;
