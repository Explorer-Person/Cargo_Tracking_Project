import styleCSS from "/public/css/styles.module.css"  
import { Nav, NavLink, NavItem } from "reactstrap";
import Styles from "/public/css/styles.module.css";


export default function NavbarUI(){


  return (   
    <Nav className={`${styleCSS.navbar}`}>
        <NavItem><img className={`${Styles.navbarShip}`} src="/logos/navbar-logo.png" alt="" /></NavItem>
        <NavLink className={`${Styles.navbarTitle}`} href="/"><h1 className="text-light">Articway Logistic</h1></NavLink>
    </Nav>
  );
}
