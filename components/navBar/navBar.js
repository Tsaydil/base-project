import styles from "./navBar.module.css";
import NavButton from "../navButton/navButton";



const navBar = (props) => (
    <div className={styles.NavBar}>
        {props.navButtons.map(button => (
            <NavButton
                key={button.path}
                path={button.path}
                label={button.label}
                icon={button.icon}
            />
        ))}
    </div>
);
/*{props.navButtons.map(button => (
    <navButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
    />
))}*/

export default navBar;

