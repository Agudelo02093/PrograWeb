import { useApp } from '../../hooks/useApp'
import { Button } from '../Button/Button';

export function ImgCat () {
    const {
        imgGatico,
        isLoading,
        isFirstTime,
    } = useApp()


    return (
        <>
          {isLoading ? (
            <img className='loadcat' src="https://cdn.dribbble.com/users/160117/screenshots/3197970/main.gif" alt="Loading" />
          ) : (
            <>
              {!isFirstTime.current && (
                <img src={imgGatico} alt="ImgCat" />
              )}
            </>
          )}
        </>
      );
}