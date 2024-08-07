import React, { useState, useEffect } from 'react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false); // Set initial visibility to false
    const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(true);
            } else {
                // Scrolling up
                setIsVisible(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleScrollToSection = (sectionId) => {
        const scrollTo = (element, to, duration) => {
            if (duration <= 0) return;
            const difference = to - element.scrollTop;
            const perTick = difference / duration * 10;

            setTimeout(() => {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === to) return;
                scrollTo(element, to, duration - 10);
            }, 10);
        };

        if (sectionId === 'home') {
            scrollTo(document.documentElement, 0, 1000); // 1000ms duration
        } else if (sectionId === 'contact') {
            scrollTo(document.documentElement, document.body.scrollHeight, 1000); // 1000ms duration
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                scrollTo(document.documentElement, sectionTop, 1000); // 1000ms duration
            }
        }
    };

    return (
        <nav className={`bg-white p-1 fixed top-0 left-0 w-full z-50 flex justify-center space-x-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button onClick={() => handleScrollToSection('home')} className="text-xxs font-fira text-black-0 mx-2">// home</button>
            <button onClick={() => handleScrollToSection('about')} className="text-xxs font-fira text-black-0 mx-2">// about</button>
            <button onClick={() => handleScrollToSection('experience')} className="text-xxs font-fira text-black-0 mx-2">// experience</button>
            <button onClick={() => handleScrollToSection('work')} className="text-xxs font-fira text-black-0 mx-2">// work</button>
            <button onClick={() => handleScrollToSection('contact')} className="text-xxs font-fira text-black-0 mx-2">// contact</button>
        </nav>
    );
}

export default Navbar;