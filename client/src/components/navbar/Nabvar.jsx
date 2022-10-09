import "./navbar.css"
import logo from "../../Images/LogoHub.png"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

    const { email } = useContext(AuthContext);
    console.log(email)

    return (
			<div className="navbar">
				<div className="navContainer">
					<Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
						<span className="logo">
							<img src={logo} alt="Logo del Hub"></img>
						</span>
					</Link>
					<div className="navItems">
						<Link to="/">
							<button className="navButton">INICIO</button>
						</Link>
						<button className="navButton">EXPLORA</button>
						<button className="navButton">CONTÁCTANOS</button>

						{email ? email.email : (
							<div className="navItems" style={{"display":"flex"}}> 
								<button className="navButton">REGÍSTRATE</button>
                                <Link to="/login">
								    <button className="navButton">INICIA SESIÓN</button>
                                </Link>
							</div>
						)}
					</div>
				</div>
			</div>
		);
}

export default Navbar