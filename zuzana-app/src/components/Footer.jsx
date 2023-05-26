import "../App.css";
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"

function Footer() {
  return (
    <div className="footerdiv">
      <div className="icondivs">
        <img className="iconimg" alt="icon" src={icon1}/>
        <h4>Declarative</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="icondivs">
        <img  className="iconimg" alt="icon" src={icon2}/>
        <h4>Components</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="icondivs">
        <img  className="iconimg" alt="icon" src={icon3}/>
        <h4>Single-Way</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="icondivs">
        <img  className="iconimg" alt="icon" src={icon4}/>
        <h4>JSX</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      
    </div>
  )
}

export default Footer
