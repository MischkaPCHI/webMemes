import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "./style.css";
import Button from "./components/Button";
import { arrayOfImg } from "./img";
import { links } from "./link";
// import facebook from './facebook.svg';

function App() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  return (
    <div>
      <div className="header"> 
        <div className="logo-wrapper">
          <img className="logo" src={logo} alt="" />
        </div>
      <div/>
      {
        links.map((link, i) => <Button key={i} url={link.link}>{link.title}</Button>)
      }
    </div>

    <div className="time">Time: {now.toLocaleTimeString()}</div>
    <h1>Memes</h1>

    <div className="img">
      {arrayOfImg.map((img, i) => (<img key={i} src={img.memImg} alt="" />))}
    </div>

    <footer>{/* <img src={facebook}></img> */}</footer>
    </div>
  );
}

export default App;
