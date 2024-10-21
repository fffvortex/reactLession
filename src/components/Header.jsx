import logo from '/public/logo-warhammer.svg'
import './img.css'
import { useState } from 'react';

export default function Header() {
    const [now, setNow] = useState(new Date())
    setInterval(()=>setNow(new Date),1)
    let h2string = 'React'
    return (
      <header className='header'>
        <img className='img-logo' src={logo} alt="" />
        <h2>{h2string}</h2>
        {/* <h3>React Lession</h3> */}
        <span>Time now: { now.toLocaleTimeString()}</span>
      </header>
    );
  }