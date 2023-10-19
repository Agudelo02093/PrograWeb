import { Menu, MenuBrand } from '..'
import styles from './Header.module.css'
import { headerNavLinks } from '../../const/headerNavLinks'

export function Header() {
    const imgUrl = 'https://www.eafit.edu.co/cec/congresos/SiteAssets/Paginas/Gerenciar-5to-Congreso-de-Negociacion-y-Liderazgo/LOGO-PORTAFOLIO-REDISE%C3%91O.PNG'

    return(
        <header className={styles.menu}>
            <MenuBrand img={imgUrl} />
            <Menu menu={headerNavLinks} color='red'/>
        </header>
    )
}