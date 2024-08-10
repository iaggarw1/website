import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false); // Initially hidden
    const location = useLocation();
    const excludedPaths = ['/recyclethis', '/solarcar', '/supportxr'];
    const isExcludedPage = excludedPaths.includes(location.pathname);
    const homeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const homeEntry = entries.find(entry => entry.target.id === 'home');
                if (homeEntry) {
                    setIsVisible(!homeEntry.isIntersecting);
                }
            },
            { threshold: 0.2 }
        );

        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeRef.current = homeSection;
            observer.observe(homeSection);
        }

        return () => {
            if (homeRef.current) {
                observer.unobserve(homeRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isExcludedPage) {
            setIsVisible(false);
        } else {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        const homeEntry = entries.find(entry => entry.target.id === 'home');
                        if (homeEntry) {
                            setIsVisible(!homeEntry.isIntersecting);
                        }
                    },
                    { threshold: 0.2 }
                );
                observer.observe(homeSection);
                return () => observer.disconnect();
            }
        }
    }, [location.pathname, isExcludedPage]);

    const handleScrollToSection = (sectionId) => {
        const scrollTo = (element, to, duration) => {
            if (duration <= 0) return;
            const difference = to - element.scrollTop;
            const perTick = (difference / duration) * 10;

            setTimeout(() => {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === to) return;
                scrollTo(element, to, duration - 10);
            }, 10);
        };

        const section = document.getElementById(sectionId);
        if (section) {
            scrollTo(document.documentElement, section.offsetTop, 600);
        }
    };

    if (isExcludedPage) {
        return null;
    }

    return (
        <nav className={`bg-white p-2 shadow-md fixed left-0 w-full z-50 flex justify-center items-center transition-all duration-1000 ${isVisible ? 'top-0' : '-top-32'}`}>
            <div className="flex-col md:flex-row md:flex md:space-x-4 transition-transform duration-500 ease-in-out transform">
                <button onClick={() => handleScrollToSection('home')} className="text-sm md:text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-center md:text-right">
                    <span className="block leading-none text-right">01</span>
                    <span className="block leading-none">// home</span>
                </button>
                <button onClick={() => handleScrollToSection('about')} className="text-sm md:text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-center md:text-right">
                    <span className="block leading-none text-right">02</span>
                    <span className="block leading-none">// about</span>
                </button>
                <button onClick={() => handleScrollToSection('experience')} className="text-sm md:text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-center md:text-right">
                    <span className="block leading-none text-right">03</span>
                    <span className="block leading-none">// experience</span>
                </button>
                <button onClick={() => handleScrollToSection('work')} className="text-sm md:text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-center md:text-right">
                    <span className="block leading-none text-right">04</span>
                    <span className="block leading-none">// work</span>
                </button>
                <button onClick={() => handleScrollToSection('contact')} className="text-sm md:text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-center md:text-right">
                    <span className="block leading-none text-right">05</span>
                    <span className="block leading-none">// contact</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;