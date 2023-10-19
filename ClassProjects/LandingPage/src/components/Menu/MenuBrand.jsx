import { Link } from 'react-router-dom'
export function MenuBrand ({ img }) {
    return (
        <>
            <Link to='./'>
                <img
                 src={img}
                 width='200px'
                 height='auto'
                 />
            </Link>
        </>
    )
}