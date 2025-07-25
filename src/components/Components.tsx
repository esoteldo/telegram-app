import { useEffect, useState } from "react";

// PrizeSection.jsx
export const PrizeSection = () => (
  <section className="prize-section">
    <h3>Today's Grand Prize</h3>
    <div className="prize-amount">$2,500 USD</div>
  </section>
);

// CryptoPrices.jsx
export const CryptoPrices = ({ prices, setPrices }:{prices: {btc:string, eth:string}, setPrices: React.Dispatch<React.SetStateAction<{btc:string, eth:string}>>}) => {
  useEffect(() => {
    const fetchIt = async () => {
      const btc = 67234 + Math.random() * 200;
      const eth = 3456 + Math.random() * 50;
      setPrices({ btc: btc.toFixed(3), eth: eth.toFixed(3) });
    };
    fetchIt();
    const id = setInterval(fetchIt, 30_000);
    return () => clearInterval(id);
  }, [setPrices]);

  return (
    <section className="crypto-prices">
      <div className="crypto-card">
        <i className="fab fa-bitcoin bitcoin-icon" /> Bitcoin (BTC)
        <br />
        ${prices.btc} → <span className="digits">{prices.btc.slice(-3)}</span>
      </div>
      <div className="crypto-card">
        <i className="fab fa-ethereum ethereum-icon" /> Ethereum (ETH)
        <br />
        ${prices.eth} → <span className="digits">{prices.eth.slice(-3)}</span>
      </div>
    </section>
  );
};

// Countdown.jsx
export const Countdown = ({ countdown}:{countdown:string}) => (
  <section className="drawing-info">
    <div className="next-drawing">Next drawing in:</div>
    <div className="countdown">{countdown}</div>
  </section>
);

// TicketSection.jsx
export const TicketSection = ({ tickets, setTickets }:{tickets:number, setTickets: React.Dispatch<React.SetStateAction<number>>}) => (
  <section className="ticket-section">
    <h3 className="ticket-title">Buy Your Ticket</h3>
    <div className="ticket-price">$5 USD</div>
    <div className="ticket-quantity">
      <button onClick={() => setTickets(Math.max(1, tickets - 1))}>-</button>
      <input
        type="number"
        min="1"
        max="20"
        value={tickets}
        onChange={(e) => setTickets(+e.target.value)}
      />
      <button onClick={() => setTickets(Math.min(20, tickets + 1))}>+</button>
    </div>
    <button
      className="btn"
      onClick={() =>
        alert(`Purchasing ${tickets} ticket(s) for $${tickets * 5}`)
      }
    >
      <i className="fas fa-ticket-alt" /> Buy Tickets
    </button>
  </section>
);

// PastWinners.jsx
export const PastWinners = ({ open, toggle }:{open:boolean, toggle:()=>void}) => (
  <section>
    <button className="btn" onClick={toggle}>
      {open ? "Hide" : "Show"} Past Winners
    </button>
    {open && (
      <ul className="winners-list">
        <li>2025-07-23 – 571829 – 0x7a2b…3f8c</li>
        <li>2025-07-22 – 134472 – 0x4e5a…9d2b</li>
        <li>2025-07-21 – 897053 – 0x8c1f…7e3a</li>
      </ul>
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