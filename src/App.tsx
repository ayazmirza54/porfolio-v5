import './App.css'
import { Portfolio } from "@/components/Portfolio"
import { WelcomeScreen } from './components/WelcomeScreen';
import { useState } from 'react';

function App() {
const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
    {showWelcome && <WelcomeScreen onComplete={() => setShowWelcome(false)} />}
    <Portfolio />
    </>
  )
}

export default App
