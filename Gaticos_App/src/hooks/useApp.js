import { useEffect, useContext } from "react";
import { fetchImg, fetchFact } from "../services/fetch";
import { GaticoContext } from "../context/GaticoContext";

export const useApp = () => {
    const context = useContext(GaticoContext)

    if (!context) {
        throw new Error('GaticoContextProvider Component')
    }

    const {
        error,
        setError,
        catRandomFact,
        setCatRandomFact,
        imgGatico,
        setImgGatico,
        isLoading,
        setIsLoading,
        isFirstTime
    } = context

    useEffect(() => {
        if (isFirstTime.current) {
            isFirstTime.current = (catRandomFact === '')
        }
    }, [catRandomFact])
    
    const getImg = (newImgText) => {
        fetchImg({ newImgText })
        .then(newImg => setImgGatico(newImg))
        .catch(e => setError(e))
        .finally(() => setIsLoading(false))
    }

    const getFact = () => {
        fetchFact()
        .then(newFact => {
            setCatRandomFact(newFact)
            const newImgText = newFact.split(' ').slice(0, 4).join(' ')
            getImg(newImgText)
        })
        .catch(e => setError('Sorry, Not there are information about'))
    }

        useEffect(() => {
            console.log('Imagen gatico')
            }, [getImg])

        useEffect(() => {
            console.log('Dato Random!!')
            }, [getFact])
        
        const handleButton = () => {
            setIsLoading(true)
            getFact()
        }

        return (
            {
            error,
            imgGatico,
            catRandomFact,
            isLoading,
            isFirstTime,
            handleButton
            }
        )


}
