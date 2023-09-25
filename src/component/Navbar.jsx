import {Link} from 'react-router-dom'

import { BsSearch } from 'react-icons/bs'
const Navbar = () => {
   
    return (
    <>
     <div className="title">
                <Link to='/' style={{ textDecoration: "none", color: "wheat", fontSize: "19px" }}>Home</Link>
            </div>
            <div className="title" style={{ position: "relative", left: "1rem" }}>
                <Link to='/' className="main">About Us</Link>
                <Link to='/' className="main"> Blog</Link>
                <Link to='/' className="main">Contact Us</Link>
            </div>
            <div className="title" style={{ position: "relative", left: "200px" }}>
                <input type="text" placeholder=".............." className="inp" />
                <button><BsSearch /></button>
            </div>
    </>
           
       
    )
}

export default Navbar
