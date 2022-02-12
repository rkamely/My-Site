import React, {useState} from "react";
import {scroller} from "react-scroll";
import HamburgerButton from "../Components/Button/HamburgerButton";
import ThemeBtn from "../Components/Button/ThemeBtn";

import './Header.scss';


function Header() {
    const [open, setOpen] = useState(false)
    // let prevScrollPos = window.pageYOffset;
    //
    // window.onscroll = function () {
    //     let currentScrollPos = window.pageYOffset;
    //     if (prevScrollPos > currentScrollPos) {
    //         {
    //             document.getElementById("Header").style.height = "50px";
    //             document.getElementById("Header").style.opacity = "1";
    //         }
    //     } else {
    //         document.getElementById("Header").style.height = "65px";
    //     }
    //     prevScrollPos = currentScrollPos;
    // }

    const scrollToSection = (e) => {
        setOpen(false)
        scroller.scrollTo(e, {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };
    const mobileMenu = () => {
        setOpen(!open)
    }
    return (<div className='headerRelative'>
            <nav id='Header' className="Header">
                <div className='HamburgerBtn' onClick={mobileMenu}><HamburgerButton open={open}/></div>
                <div className={open ? 'rightSide' : 'closeRightSide'}>
                    <button onClick={() => scrollToSection('aboutMe')}>About Me</button>
                    <button onClick={() => scrollToSection('experience')}>Experience</button>
                    <button onClick={() => scrollToSection('Skills')}>Skills</button>
                    <button onClick={() => scrollToSection('Education')}>Education</button>
                    <button onClick={() => scrollToSection('Footer')}>Contact Me</button>

                </div>
                <div className='leftSide'>
                    <div>Reza kameli</div>
                    <ThemeBtn/>
                </div>
            </nav>

        </div>
    );
}

export default Header;
