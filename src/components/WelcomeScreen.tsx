import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface WelcomeScreenProps {
    onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(false);

    useEffect(() => {
        // Check if light theme is active
        const checkTheme = () => {
            setIsLightTheme(document.documentElement.classList.contains('light-theme'));
        };

        checkTheme();

        // Observer for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        // Start fade out after animation plays
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 3000);

        // Complete the welcome screen
        const completeTimer = setTimeout(() => {
            setIsVisible(false);
            onComplete();
        }, 3700);

        return () => {
            observer.disconnect();
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${isFadingOut ? 'opacity-0' : 'opacity-100'
                }`}
            style={{
                backgroundColor: isLightTheme ? '#ffffff' : '#09090b',
            }}
        >
            <div
                style={{
                    width: '400px',
                    height: '400px',
                    // White animation in dark mode (default), black animation in light mode
                    filter: isLightTheme ? 'none' : 'invert(1)',
                }}
            >
                <DotLottieReact
                    src="/Hello (apple).json"
                    loop={false}
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </div>
    );
}
