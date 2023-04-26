import React, { useState, useEffect } from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

export const AppContext = React.createContext();
export default function AppProvider({ children }) {
    let scrumValues = {
        courage: 0,
        commitment: 0,
        focus: 0,
        openness: 0,
        respect: 0
    }
    const [scrumValuesState, setScrumValuesState] = useState(scrumValues);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const { width, height } = useWindowDimensions();
    const commonBreakPoint = [320, 480, 768, 1024, 1025, 1200];
    return (
        <AppContext.Provider
            value={{
                scrumValues,
                openSuccessModal,
                setOpenSuccessModal,
                width,
                height,
                commonBreakPoint,
                loading,
                setLoading,
                scrumValuesState,
                setScrumValuesState
            }}
        >
            {children}
        </AppContext.Provider>
    );
}