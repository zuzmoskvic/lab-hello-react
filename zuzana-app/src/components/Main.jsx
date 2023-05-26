import "../App.css";
import ironhacklogo from "../images/ironhack-logo-xs.png"
import menu from "../images/menu-top-xs.png"

function Main() {
  return (
    <div className="main">
        <div className="logosdiv">
            <img className="logos" alt="ironhack logo" src={ironhacklogo}/>
            <img className="logos" alt="hamburger menu" src={menu}/>
        </div>
        <div className="maindiv">
            <h1>Say hello to ReactJS</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at tempus ex, a elementum est. </h3>
            <button>Awesome!</button>
        </div>
    </div>
  )
}

export default Main
