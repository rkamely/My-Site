import React from "react";
import SegmentTitle from "../Components/SegmentTitle";
import NormalContactInput from '../Components/Input/NormalContactInput'
import ButtonContactMe from "../Components/Button/ButtonContactMe";

import './Footer.scss';
import contactMe from "../Assets/contactMe.png";

function Footer() {
    return (
        <div className="Footer">
            <SegmentTitle title={"Contact Me"}src={contactMe} alt={'Contact Me'}/>
            <form action="" className='contactForm'>
                <NormalContactInput placeHolder={'First Name & Last Name'}/>
                <NormalContactInput placeHolder={'Email e.g. example@yahoo.com'}/>
                <NormalContactInput placeHolder={'Phone No. e.g. +989125000000'}/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'/>
                <ButtonContactMe content={'Send Me'}/>
            </form>
            <div className='signature'><span>Designed By Reza Kameli @2021</span></div>
        </div>
    );
}

export default Footer;
