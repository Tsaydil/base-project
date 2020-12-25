import styles from './layout.module.css';
import Link from 'next/link';
import navButtons from "../config/buttons.js";
import NavBar from "./navBar/navBar";

const Layout = ({children}) => {
    console.log(navButtons);
    return (
        <div>
            <NavBar navButtons={navButtons} />
            {children}
        </div>
    )
}

export default Layout;
