import logo from './logo.svg'
import './App.css'
import { init } from '@airwallex/components-sdk'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const initializeSDK = async () => {
      try {
        // initialize AirwallexOnboarding instance on window
        await init({
          authCode: 'n69qr-vBlyTVTIikgo5h9QAUv54-o5S4xIVL6rzTxHsH',
          codeVerifier:
            '0522b40da02fa89fc90222adb030b8303d7201cd5b4c2042cf…ed7620972ac56d03a4d7e5c0bbf2fe60df6c61a104d4f9cab',
          env: 'demo',
          clientId: 'xxxx',
        })
      } catch (e) {
        console.error(e)
      }
    }

    initializeSDK()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
