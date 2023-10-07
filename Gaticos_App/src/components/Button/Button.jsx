import { useApp } from '../../hooks/useApp'

export function Button ({ title }) {
    const { handleButton } = useApp();

    return(
        <>
        <button 
        onClick={handleButton} >
        {title}
        </button>
        </>
    );
}