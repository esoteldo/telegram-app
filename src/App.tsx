import {  useEffect, useState } from 'react'

import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import {BottomNav, Countdown, CryptoPrices, HowItWorks, PastWinners, PrizeSection, TicketSection} from './components/Components.tsx'

import WebApp from '@twa-dev/sdk'
interface Userdata{
  id:number,
  first_name:string,
  last_name?:string,
  username?:string,
  language_code?:string,
  is_premium?:boolean
}


function App() {

  const [userData, setUserData]=useState<Userdata | null>(null)

  console.log(userData)

  useEffect(() => {
    if(WebApp.initDataUnsafe.user){
      //data del usuario de telegram
      setUserData(WebApp.initDataUnsafe.user)
    }
  }, [])

  const [prices, setPrices]  = useState({ btc: "0.000", eth: "0.000" });
  const [countdown, setCD]   = useState("Loading…");
  const [tickets, setTickets]= useState(1);
  const [openWinners, setOpen] = useState(false);

  // 8 PM UTC countdown
  useEffect(() => {
    const tick = () => {
      const now: Date = new Date();
      const next: Date = new Date();
      next.setHours(20, 0, 0, 0);
      if (now.getTime() > next.getTime()) next.setDate(next.getDate() + 1);
      const diff: number = next.getTime() - now.getTime();
      const h = String(Math.floor(diff / 3_600_000)).padStart(2, "0");
      const m = String(Math.floor((diff % 3_600_000) / 60_000)).padStart(2, "0");
      const s = String(Math.floor((diff % 60_000) / 1000)).padStart(2, "0");
      setCD(`${h}:${m}:${s}`);
    };
    tick(); const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  
  
  return (
    <>
    <div className="container">
      
      {/* <div>
        <ul>
          <li>id: {userData?.id}</li>
           <li>nombre:{userData?.first_name}</li>
          <li>apellido: {userData?.last_name}</li>
          <li>Data: {userData?.username}</li>
          <li>idioma: {userData?.language_code}</li>
          <li>premiun?: {userData?.is_premium}</li> 
        </ul>
      
      </div> */}
      
      <div className="app">
      {/* Top section */}

      <header>
        <div className='logo-container'><div className="logo1">Cryp2</div><div className="logo2">Win</div></div>
            <h1>Crypto 2-Decimal Lucky Draw</h1>
            <p className="subtitle">Win big with the last two decimals of Bitcoin & Ethereum prices daily at 8 PM UTC</p>
        </header>

      <PrizeSection />
      <CryptoPrices prices={prices} setPrices={setPrices} />
      <Countdown countdown={countdown} />
      <TicketSection tickets={tickets} setTickets={setTickets} />
      <PastWinners open={openWinners} toggle={() => setOpen(!openWinners)} />
      <HowItWorks />

      
    </div>
      
		
    </div>
    {/* Bottom nav */}
      <BottomNav />
    </>
  )
}

export default App


