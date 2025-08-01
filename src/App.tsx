
import { useEffect, useMemo} from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './css/App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { miniApp, viewport } from '@telegram-apps/sdk-react';
/* import { useIntegration } from '@telegram-apps/react-router-integration'; */
import { retrieveLaunchParams} from '@telegram-apps/sdk-react';
import HomePage from './pages/HomePage.tsx';
import { BottomNav } from './components/Components.tsx';

import BuyTickets from './pages/BuyTickets.tsx';



function App() {
  const lp = useMemo(() => retrieveLaunchParams(), []);
    /* const navigator = useMemo(() => new BrowserNavigator(['/index'], 0);, []); */
    /* const [location, reactNavigator] = useIntegration(navigator); */

   /*  useEffect(() => {
        navigator.attach();
        return () => navigator.detach();
    }, [navigator]); */

    useEffect(() => {
      if (miniApp.setBackgroundColor.isAvailable()) {
        miniApp.setBackgroundColor('#161C24');
      }
      if (miniApp.setHeaderColor.isAvailable()){
        miniApp.setHeaderColor('#161C24');
      }
      if (miniApp.ready.isAvailable()) {
        miniApp.ready();
      }
    }, [miniApp]);

    useEffect(() => {
        if (viewport.expand.isAvailable()) {
          viewport.expand();
       }
    }, [viewport]);
  
  return (
    <>
    
      {/* BrowserRouter wraps the entire app to enable routing */}
    <HashRouter>
    <div className="container">
      <h4>{typeof lp.tgWebAppBaseUrl === 'string' ? lp.tgWebAppBaseUrl : ''}</h4>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/buytickets" element={<BuyTickets />} />
              {/* Add more routes as needed */}   
               {/*  <Route path="*" element={<Navigate to="/"/>}/> */}
            </Routes>
        
      
      </div>
      <BottomNav />
      </HashRouter>
    </>
  )
}

export default App


