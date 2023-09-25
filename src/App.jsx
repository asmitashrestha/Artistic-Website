import { Link } from "react-router-dom"
import back1 from './assets/img2.jpg'
import back from './assets/img1.jpg'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import Navbar from "./component/Navbar"

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
  const myStyle1 = {
    backgroundImage: `url(${back1})`,
    height: '100vh',
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundAttachment: "fixed",
    marginTop: "-135px",
  }
  return (
    <>
      <section className="contain">
        <div className="container" style={myStyle}>
          <Navbar />
        </div>
        <div className="tit">
          <div className="head">
            <h1 style={{ color: "white", fontSize: "50px", wordSpacing: "10px" }}>Explore the world</h1>
          </div>
          <div className="para" >
            <p style={{ justifyContent: "center", position: "relative", left: "200px", color: "wheat", fontSize: "15px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sed dicta <br /> quo saepe  ad facilis ducimus porro at magni possimus quaerat?</p>
            <p style={{ justifyContent: "center", position: "relative", right: "220px", color: "wheat", fontSize: "15px" }}>Explore more <BsFillArrowRightCircleFill style={{ justifyContent: "center", alignItems: "center" }} /> </p>
          </div>
        </div>

      </section>

      <section className="about" >
        <div className="abt" style={myStyle1}>
           <Navbar />
        </div>
        <div className="tit">
          <div className="head">
            <h1 style={{ color: "white", fontSize: "50px", wordSpacing: "10px" }}>Explore the world</h1>
          </div>
          <div className="para" >
            <p style={{ justifyContent: "center", position: "relative", left: "200px", color: "wheat", fontSize: "15px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sed dicta <br /> quo saepe  ad facilis ducimus porro at magni possimus quaerat?</p>
            <p style={{ justifyContent: "center", position: "relative", right: "220px", color: "wheat", fontSize: "15px" }}>Explore more <BsFillArrowRightCircleFill style={{ justifyContent: "center", alignItems: "center" }} /> </p>
          </div>
        </div>
       
        


      </section>


    </>
  )
}

export default App
