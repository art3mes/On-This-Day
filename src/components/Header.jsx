import React, { useState } from "react";

function Header() {
    const [scroll, setScroll] = useState(false);


    const changeScrollValue = () => {
        const scrollValue = document.documentElement.scrollTop;
        if (scrollValue > 100) {
            setScroll(true);
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', changeScrollValue);
    return (
        <div className={scroll ? "header-body-afterScroll header-body" : "header-body"}>
            <div className="header-text">On This Day<span>TM</span></div>
        </div>
    );
}

export default Header;