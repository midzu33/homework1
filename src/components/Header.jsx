import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div>
            <ul>
                <li><Link to='/'>ГЛАВНАЯ</Link></li>
                <li><Link to='/create'>СОЗДАТЬ ПОСТ</Link></li>
            </ul>
        </div>
    )
}
export default Header