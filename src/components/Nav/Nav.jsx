
import {Link} from 'react-router-dom';
import "./Nav.css";
export default function Nav(){
    return(
        <nav className='nav'>
            <Link to='/'>
            <div>Crypto Prices</div>
            </Link>
            <Link to='/currencies'>
            <div>Currency Prices</div>
            </Link>
        </nav>
    )
}