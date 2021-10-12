import './App.css';
import email from "./Icons/email.svg";
import phone from "./Icons/phone.svg";
import Headset from "./Icons/headset.svg";
import Navi from "./Icons/navi.svg";
import Globe from "./Icons/globe.svg";
import Badge from "./Icons/Badge.svg";
import WorldMap from "./Icons/worldMap.svg";
import Peacock from "./Icons/Rectangle/peacock.png";


const App = () => {
  return (
    <div className="App">
      <div className="row">
        <div className="coffset-2 ol-6">
          <div className="MakeAdjustance">Home</div>
          <div className="MakeAdjustance PositionLeft">Our Brand</div>
          <div className="MakeAdjustance PositionLeft">Achievements</div>
          <div className="MakeAdjustance PositionLeft">About us</div>
          <div className="MakeAdjustance PositionLeft">Get a free Quote</div>
        </div>
        <div className="MakeAdjustance">
          <div className="MakeAdjustance Msg-logo">
            <img src={email} alt="logo" />
          </div>
          <div className="MakeAdjustance Phone-logo">
            <img src={phone} alt="logo" />
          </div>
          <div className="MakeAdjustance Number">+91 9994441164</div>  
        </div>
      </div>

      <div>
        <div>
          <div className="Peacock">
            <div>
              <img src={Peacock} alt="WorldMap" className="PeacockIcon"/>
              <div>SP EXPORTS & IMPORTS</div>
            </div>
            <div>We Export Your Demands Worldwide</div>
            <div>We do export of premium quality Indian Agricultural Commodities 
              such as rice, pulses, cereals, onion, and potato. 
              Spices like cardamom, red chilli, dry ginger, cumin seeds, and more...
            </div>
          </div>
          <div className="WorldMap">
            <img src={WorldMap} alt="WorldMap" />
          </div>
        </div>
      </div>

      <div className="Footer">
        <div className="FooterSection">
          <div className="FooterSectionText">
            <img src={Badge} alt="logo" className="Footer-logo" />
            <div>Trusted Quality</div>
            <div className="FooterSubText">We deliver Global trusted quality products</div>
          </div>
        </div>
        <div className="FooterSection">
          <div className="FooterSectionText">
          <img src={Globe} alt="logo"className="Footer-logo"  />
          <div>Global Shipping</div>
          <div className="FooterSubText">On time worldwide shipping</div>
          </div>
        </div>
        <div className="FooterSection">
          <div className="FooterSectionText">
          <img src={Headset} alt="logo" className="Footer-logo" />
          <div>Customer support</div>
          <div className="FooterSubText">24/7 Live tracking and support</div>
          </div>
        </div>
        <div className="FooterSection">
          <div className="FooterSectionText">
          <img src={Navi} alt="logo" className="Footer-logo" />
          <div>Flexible Payments</div>
          <div className="FooterSubText">LC / TT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
