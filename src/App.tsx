import {  useEffect, useState } from 'react'

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
      <h4>id: {userData?.id}</h4>
      <h4>nombre:{userData?.first_name}</h4>
      <h4>apellido: {userData?.last_name}</h4>
      <h4>Data: {userData?.username}</h4>
      <h4>idioma: {userData?.language_code}</h4>
      <h4>premiun?: {userData?.is_premium}</h4>
      </div>
      
      
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
