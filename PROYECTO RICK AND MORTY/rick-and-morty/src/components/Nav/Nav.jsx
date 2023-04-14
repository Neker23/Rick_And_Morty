import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'
import {Link} from 'react-router-dom';

const Nav = ({onSearch, setAccess}) =>{

    const handleLogout = () => {
        setAccess(false)
    }

    return (
        <div className={styles.container}>
            <div>
                <Link to='/home'>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                     <button className={styles.buttonLink}><i class="fa fa-home"></i>
                        Home
                     </button>
                </Link>

                <Link to='/about'>
                    <button className={styles.buttonLink}>
                        About
                    </button>
                </Link>
                <Link to='/favorites'>
                    <button className={styles.buttonLink}>
                        Favoritos❤️
                    </button>
                </Link>
            </div>
            <SearchBar onSearch={onSearch}/>
            <button className={styles.buttonLink} onClick={handleLogout}><i class="fa fa-sign-out"></i>LogOut</button>
        </div>
    )
}

export default Nav;