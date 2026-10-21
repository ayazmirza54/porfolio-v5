import './App.css'
import { Portfolio } from "@/components/Portfolio"
import { lazy, Suspense, useState } from 'react';

// The Lottie player is large, so load it in its own chunk instead of the main bundle
const WelcomeScreen = lazy(() => import('./components/WelcomeScreen').then((m) => ({ default: m.WelcomeScreen })));

const WELCOME_SEEN_KEY = 'welcome-seen';

function shouldShowWelcome() {
  try {
    return sessionStorage.getItem(WELCOME_SEEN_KEY) !== '1';
  } catch {
    return true;
  }
}

function App() {
  const [showWelcome, setShowWelcome] = useState(shouldShowWelcome);

  const handleWelcomeComplete = () => {
    try {
      sessionStorage.setItem(WELCOME_SEEN_KEY, '1');
    } catch {
      // Storage unavailable (private mode etc.): the intro just plays again next time
    }
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome && (
        <Suspense fallback={<div className="fixed inset-0 z-[9999] bg-[#09090b]" />}>
          <WelcomeScreen onComplete={handleWelcomeComplete} />
        </Suspense>
      )}
      <Portfolio />
    </>
  )
}

export default App
