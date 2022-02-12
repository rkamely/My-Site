import React, {useState} from "react";

import './ThemeBtn.scss';


function ThemeBtn() {


    const [darkMode, setDarkMode] = useState(false)
    let btn = document.getElementById('ThemeBtn')

    const handlerTheme = () => {
        btn.classList.remove('ThemeBtn-animation')
        localStorage.setItem('theme', `${!darkMode}`)
        setDarkMode(!darkMode)
        btn.classList.add('ThemeBtn-animation')

    }
    const animationEnd =()=>{
        btn.classList.remove('ThemeBtn-animation')

    }



    return (
        <div id='ThemeBtn' className='ThemeBtn' onClick={handlerTheme} onAnimationEnd={animationEnd}>{darkMode ? 'dark' : 'light'}  </div>
    );
}

export default ThemeBtn;
