import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './style.css';
import Button from './components/Button';
import {arrayOfImg} from './img';
import {links} from './link';

const Img = (props) => {
  return(
    <img src={props.src} alt="" />
  );
};


function App() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);
  return (
    <div>
    <div className="header">
        <div className="logo-wrapper">
            <img className="logo" src={logo} alt="" />
        </div>

      {
        links.map((link, i) => <Button key={i}>{link.title}</Button>)
      }

    </div>

    <div className='time'>Time: {now.toLocaleTimeString()}</div>
    <h1>Memes</h1>

    <div className="img">
        {/* <img src={arrayOfImg[0]} alt="" /> */}
        {/* <img src="./images/Снимок экрана 2024-02-08 122019.png" alt="" /> */}
        {arrayOfImg.map((img, i) => (
          <Img key={i} src={img.memImg} />
        ))}
    </div>
</div>
  );
}

export default App;
