import './Header.css'
import logo from './TheValley.png'
import Link from '../Link/Link';

const MyHeader = () => {
    return (
        <header className="container">
            <div className="nav__container">
                <Link text ="Facebook" url = "https://www.facebook.com/TheValleyDBS/?locale=es_ES"></Link>
                <Link text ="Instagram" url ="https://www.instagram.com/thevalleydbs/?hl=es"></Link>
                <Link text ="Twitter" url ="https://twitter.com/"></Link>
            </div>
            <div className="img__container">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="button__container">
                <Link text ="Docu React" url ="https://legacy.reactjs.org/docs/getting-started.html"></Link>
                <Link text ="Ir a The Valley" type="button"></Link>
            </div>
        </header>
    );
}

export default MyHeader;