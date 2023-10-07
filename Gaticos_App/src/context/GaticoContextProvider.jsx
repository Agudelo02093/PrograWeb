import { GaticoContext } from "./GaticoContext";
import { useRef, useState } from "react";

export function GaticoContextProvider({ children }) {
    const [catRandomFact, setCatRandomFact] = useState("")
    const [imgGatico, setImgGatico] = useState("")
    const [error, setError] = useState(null)

    const [isLoading, setIsLoading] = useState(false)
    
    const isFirstTime = useRef(true)

    const contextValue = {
        catRandomFact,
        setCatRandomFact,
        imgGatico,
        setImgGatico,
        isLoading,
        setIsLoading,
        isFirstTime,
        error,
        setError
    }

    return (
        <GaticoContext.Provider value={contextValue}>
            {children}
        </GaticoContext.Provider>
    )
}