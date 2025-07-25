import { useEffect, useState } from "react";

// PrizeSection.jsx
export const PrizeSection = () => (
  <section className="prize-section">
            <h2 className="prize-title">Today's Grand Prize</h2>
            <div className="prize-amount">$2,500 <span >USD</span></div>
        </section>
);

// CryptoPrices.jsx
export const CryptoPrices = ({ prices, setPrices }:{prices: {btc:string, eth:string}, setPrices: React.Dispatch<React.SetStateAction<{btc:string, eth:string}>>}) => {
  useEffect(() => {
    const fetchIt = async () => {
      const btc = 67234 + Math.random() * 200;
      const eth = 3456 + Math.random() * 50;
      setPrices({ btc: btc.toFixed(2), eth: eth.toFixed(2) });
    };
    fetchIt();
    const id = setInterval(fetchIt, 30_000);
    return () => clearInterval(id);
  }, [setPrices]);

  return (
    <section className="crypto-prices">
            <div className="crypto-card">
                <div className="crypto-name">
                    <i className="fab fa-bitcoin crypto-icon bitcoin-icon"></i>
                    Bitcoin (BTC)
                    <span className="live-indicator">
                        <span className="live-dot"></span>
                        LIVE
                    </span>
                </div>
                <div className="crypto-price" id="btc-price">${prices.btc}</div>
                <div className="winning-digits">
                    <span>Winning 2 decimals:</span>
                    <span className="digits" id="btc-digits">{prices.btc.slice(-2)}</span>
                </div>
            </div>

            <div className="crypto-card">
                <div className="crypto-name">
                    <i className="fab fa-ethereum crypto-icon ethereum-icon"></i>
                    Ethereum (ETH)
                    <span className="live-indicator">
                        <span className="live-dot"></span>
                        LIVE
                    </span>
                </div>
                <div className="crypto-price" id="eth-price">${prices.eth}</div>
                <div className="winning-digits">
                    <span>Winning 2 decimals:</span>
                    <span className="digits" id="eth-digits">{prices.eth.slice(-2)}</span>
                </div>
            </div>
        </section>
   
  );
}

// Countdown.jsx
export const Countdown = ({ countdown}:{countdown:string}) => (
  <section className="drawing-info">
            <div className="next-drawing">Next drawing in:</div>
            <div className="countdown" id="countdown">{countdown}</div>
  </section>
);

// TicketSection.jsx
export const TicketSection = ({ tickets, setTickets }:{tickets:number, setTickets: React.Dispatch<React.SetStateAction<number>>}) => (
  <section className="ticket-section">
            <h2 className="ticket-title">Get Your Lucky Ticket</h2>
            <div className="ticket-price">$3 <span>USD</span></div>
            <div className="ticket-quantity">
                <button className="quantity-btn" onClick={() => setTickets(Math.max(1, tickets - 1))}>-</button>
                <input
                 className="quantity-input"
                 type="number"
                 min="1"
                 max="20"
                 value={tickets}
                 onChange={(e) => setTickets(+e.target.value)}
               />
                <button className="quantity-btn" onClick={() => setTickets(Math.min(20, tickets + 1))}>+</button>
            </div>
            
            <button
               className="buy-ticket-btn"
               onClick={() =>
                 alert(`go to buy page ${tickets} ticket(s) for $${tickets * 5}`)
               }
             >
               <i className="fas fa-ticket-alt" /> Buy Ticket(s) Now
             </button>
            <p >
                6-digit winning number = BTC last 2 decimals + ETH last 2 decimals
            </p>
        </section>
 
);

// PastWinners.jsx
export const PastWinners = ({ open, toggle }:{open:boolean, toggle:()=>void}) => (
  
  <section className="past-winners-wrapper">
    
    <button className="past-winners-toggle" id="pastWinnersToggle" onClick={toggle}>
    <i className="fas fa-trophy"></i>
    View All Past Winners
    <i className="fas fa-chevron-down"></i>
  </button>
    {open && (
      <>
      <div className="past-winners-panel" /* style={{marginTop:"100px", display: "block"}} */ id="pastWinnersPanel">
        <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" id="pastWinnersSearch" placeholder="Search by date or address…"/>
        </div>
      </div>
      <div className="table-wrapper">
      <table id="pastWinnersTable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Winning #</th>
            <th>Prize</th>
            <th>Winner Address</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  </>
  
    )}
  </section>
);

// HowItWorks.jsx
export const HowItWorks = () => (
  <section className="rules-section">
    <h3>How It Works</h3>
    <ul>
      <li>Every day at 8 PM UTC we capture the last 3 decimals of BTC & ETH.</li>
      <li>Combine them into a 6-digit winning number.</li>
      <li>Match your ticket → win $2,500!</li>
    </ul>
  </section>
);

// BottomNav.jsx
export const BottomNav = () => {
  const [active, setActive] = useState(0);
  const icons = ["fas fa-home", "fas fa-chart-line", "fas fa-trophy", "fas fa-user"];
  return (
    <nav className="bottom-nav">
      {icons.map((icon, i) => (
        <button
          key={i}
          className={active === i ? "active" : ""}
          onClick={() => setActive(i)}
        >
          <i className={icon} />
        </button>
      ))}
    </nav>
  );
};