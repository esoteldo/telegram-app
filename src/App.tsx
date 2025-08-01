
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import HomePage from './pages/HomePage.tsx';
import { BottomNav } from './components/Components.tsx';
import BuyTickets from './pages/BuyTickets.tsx';



function App() {

  
  return (
    <>
    
      
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buytickets" element={<BuyTickets />} />
        
      
    {/* Bottom nav */}
      </Routes>
      
      </div>
      <BottomNav />
      </BrowserRouter>
    </>
  )
}

export default App


