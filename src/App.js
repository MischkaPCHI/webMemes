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
        links.map((link, i) => <Button key={i} url={link.link}>{link.title}</Button>)
      }

      {/* <Button url = "https://javarush.com/">Javarush</Button>
      <Button url = "https://html5doctor.com">Html5 Doktor</Button>
      <Button url = "https://www.youtube.com/">Youtube</Button>
      <Button url = "https://frontend-stuff.com/blog/javascript-cheatsheet/">JS Шпаргалка</Button>
      <Button url = "https://tpverstak.ru/flex-cheatsheet/">CSS Шпаргалка</Button>
      <Button url = "https://chat.openai.com/auth/login">Chat GPT</Button> */}

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
