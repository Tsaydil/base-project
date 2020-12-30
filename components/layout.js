import styles from './layout.module.css';
import Link from 'next/link';
import navButtons from "../config/buttons";
import NavBar from "./navBar/navBar";
const tsa_collection = require('../api/models/tsaModel');


const Layout = ({children}) => {
    console.log(navButtons);
    return (
        <div>
            <div>
                <NavBar navButtons={navButtons} />
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;
