import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCompass,
    faPager
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
    {
        path: "/",
        label: "Main Page",
        icon: <FontAwesomeIcon icon={faCompass} />
    },
    {
        path: "/another_page",
        label: "Another Page",
        icon: <FontAwesomeIcon icon={faPager} />
    }
];

export default navButtons;

