"use client";
import React, { useEffect, useState, createContext, useContext } from 'react';

export const MobileContext = createContext();
export const useMobileContext = () => {
    return useContext(MobileContext);
};

export const MobileContextProvider = ({ children }) => {

    const [isMobile, setIsMobile] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(1);
            } else {
                setIsMobile(0);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, ); // [] added as dependency to run effect only once

    return (
        <MobileContext.Provider value={{isMobile , setIsMobile}}>
            {children}
        </MobileContext.Provider>
    );
};

