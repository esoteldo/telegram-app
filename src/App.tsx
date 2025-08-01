
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import HomePage from './pages/HomePage.tsx';
import { BottomNav } from './components/Components.tsx';
/* import BuyTickets from './pages/BuyTickets.tsx'; */
import { Suspense } from 'react';



function App() {

  
  return (
    <>
    
      <Suspense fallback={<div>Loading...</div>}>
      {/* BrowserRouter wraps the entire app to enable routing */}
    <BrowserRouter basename= 'telegram-app/'>
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/buytickets" element={<BuyTickets />} /> */}
        
      
    {/* Bottom nav */}
      </Routes>
      
      </div>
      <BottomNav />
      </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App


