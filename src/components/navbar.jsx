import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false); // Initially hidden
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const anySectionIntersecting = entries.some(entry => entry.isIntersecting);
                setIsVisible(anySectionIntersecting);
            },
            { threshold: 0.01 } // Lower threshold value to handle gaps
        );

        const sections = ['home', 'about', 'experience', 'work', 'contact'];
        sections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                sectionRefs.current.push(section);
                observer.observe(section);
            }
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

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

    return (
        <nav className={`bg-white p-1 fixed left-0 w-full z-50 flex justify-center space-x-4 transition-all duration-1000 ${isVisible ? 'top-0' : '-top-20'}`}>
            <button onClick={() => handleScrollToSection('home')} className="text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-right">
                <span className="block leading-none">01</span>
                <span className="block leading-none">// home</span>
            </button>
            <button onClick={() => handleScrollToSection('about')} className="text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-right">
                <span className="block leading-none">02</span>
                <span className="block leading-none">// about</span>
            </button>
            <button onClick={() => handleScrollToSection('experience')} className="text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-right">
                <span className="block leading-none">03</span>
                <span className="block leading-none">// experience</span>
            </button>
            <button onClick={() => handleScrollToSection('work')} className="text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-right">
                <span className="block leading-none">04</span>
                <span className="block leading-none">// work</span>
            </button>
            <button onClick={() => handleScrollToSection('contact')} className="text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-right">
                <span className="block leading-none">05</span>
                <span className="block leading-none">// contact</span>
            </button>
        </nav>
    );
};

export default Navbar;