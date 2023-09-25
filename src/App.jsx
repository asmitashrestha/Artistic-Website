import { Link } from "react-router-dom"
import back from './assets/img2.jpg'
import { BsSearch } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

function App() {

  const myStyle = {
    backgroundImage: `url(${back})`,
    height: '100vh',
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundAttachment: "fixed",


  }
  return (
    <>
      <div className="contain">
        <div className="container" style={myStyle}>
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
        </div>
      </div>

      <div className="tit">
        <h1 style={{color:"white",fontSize:"50px",wordSpacing:"10px"}}>Explore the world</h1>
        <div className="para" >
          <p style={{justifyContent:"center",position:"relative",left:"200px",color:"wheat",fontSize:"15px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sed dicta <br /> quo saepe  ad facilis ducimus porro at magni possimus quaerat?</p>
          <p style={{justifyContent:"center",position:"relative",right:"220px",color:"wheat",fontSize:"15px"}}>Explore more <BsFillArrowRightCircleFill style={{justifyContent:"center",alignItems:"center"}}/> </p>
        </div>
      </div>




    </>
  )
}

export default App
