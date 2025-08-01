import { useState } from 'react';
/* import  '../css/ticketsBuy.css'; */


const BuyTickets = () => {
    /* const [tickets, setTickets] = useState(1); */
    const [walletConnected, setWalletConnected] = useState(false);
  return (
    <>
    <header>
        <div className='logo-container'><div className="logo1">Cryp2</div><div className="logo2">Win</div></div>
            <h1>Buy Tickets</h1>
            <p className="subtitle">Secure your spot in the Crypto Daily Lucky Draw</p>
        </header>

        <section className="ticket-section">
            <h2 className="ticket-title">Ticket(s) Total Price</h2>
            <div className="ticket-amount">$10 <span /* style="font-size: 1.5rem; font-weight: 400;" */>USD</span></div>
        </section>

        <button type="button" className="connect-wallet-btn" onClick={()=>{setWalletConnected(true)}}>Connect Wallet</button>
        {walletConnected && (<button type="button" className="connect-wallet-btn">Buy Tickets</button>)}

    </>
  )
}

export default BuyTickets