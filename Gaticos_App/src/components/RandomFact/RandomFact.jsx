import { useApp } from '../../hooks/useApp'

export function RandomFact () {
    const {
        catRandomFact,
        error,
        isFirstTime
    } = useApp()

    if (error) {
        return <p className='error-message'>{error}</p>
    }

    if (isFirstTime.current) {
        return (
          <p className="firstTime">Click the button for get a funny cat fact</p>
        );
    }
    


    return(
        <>
        <main>
            <p>{catRandomFact}</p>
        </main>
        
        </>
    )
}