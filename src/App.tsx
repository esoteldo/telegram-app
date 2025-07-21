import {  useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
  const [count, setCount] = useState(0)

  const [userData, setUserData]=useState<Userdata | null>(null)


  useEffect(() => {
    if(WebApp.initDataUnsafe.user){
      setUserData(WebApp.initDataUnsafe.user)
    }
  }, [])
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{userData?.first_name}</h1>
      <h2>{userData?.last_name}</h2>
      <h2>{userData?.username}</h2>
      <h2>{userData?.language_code}</h2>
      <h2>{userData?.is_premium}</h2>
      <h2>{userData?.id}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
		{/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div>
    </>
  )
}

export default App
