
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
/* import { TonConnectUIProvider } from '@tonconnect/ui-react'; */

WebApp.ready();

createRoot(document.getElementById('root')!).render(
 /*  <TonConnectUIProvider> */
    <App />
  /* </TonConnectUIProvider> */
);

