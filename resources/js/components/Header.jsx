import React from "react";
import "../../css/header.css";

const Header = () => {
    return (
        <ul className="contain">
            <li className="item">Это первый коммент</li>
            <hr/>
            <li className="item">Это второй коммент</li>
            <hr/>
            <li className="item">Это третий коммент</li>
            <hr/>
        </ul>
    )
}

export default Header;
