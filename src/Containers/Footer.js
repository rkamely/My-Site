import React, {useContext, useState} from "react";
import SegmentTitle from "../Components/SegmentTitle";
import NormalContactInput from '../Components/Input/NormalContactInput'
import ButtonContactMe from "../Components/Button/ButtonContactMe";
import FooterValidation from "./FooterValidation";
import contactMe from "../Assets/contactMe.png";
import SwitchContext from "../Context/ThemeSwitch";
import emailjs from "@emailjs/browser";

import './Footer.scss';
import {AiOutlineLinkedin, AiOutlineMail} from "react-icons/ai";
import {BsGithub} from "react-icons/bs";
import {BiPhoneCall} from "react-icons/bi";
import myPic from "../Assets/MyPic.png"

function Footer() {
    const [contactUsInfo, setContactUsInfo] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    const [error, setError] = useState({
        email: "",
        message: "",
    })
    const inputOnchange = (value, property) => {
        setContactUsInfo({
            ...contactUsInfo,
            [property]: value,
        })
    }

    const handleContactUsForm = (e) => {
        e.preventDefault()
        FooterValidation(contactUsInfo)
            .then(() => {
                    setError({
                        email: "",
                        message: "",
                    })
                    let templateParams = {
                        name: contactUsInfo.name,
                        email: contactUsInfo.email,
                        phone: contactUsInfo.phone,
                        message: contactUsInfo.message,
                    };
                    emailjs.send('service_lbdtacm', 'template_vt5usqc', templateParams, '-oQYGhpRsSgXc-W7e')
                        .then(() => {
                            for (let input of e.target) {
                                input.value = ""
                            }
                        }, () => {
                            setError({
                                email: "",
                                message: "ارسال با خطا مواجح شد لطفا مجدد تلاش فرمایید.",
                            });
                        });
                }
            )
            .catch((err) => setError(err))
    }
    const {lightTheme} = useContext(SwitchContext);

    return (
        <div className="Footer">
            <SegmentTitle title={"Contact Me"} src={contactMe} alt={'Contact Me'}/>
            <form action="" className='contactForm' onSubmit={handleContactUsForm}>
                <NormalContactInput placeHolder={'First Name & Last Name'} inputOnchange={inputOnchange}
                                    property={"name"}/>
                <NormalContactInput placeHolder={'Email e.g. example@yahoo.com *'} inputOnchange={inputOnchange}
                                    property={"email"}/>
                {error.email ? <span style={{color: "red", textAlign: "left"}}>{error.email}</span> : ""}
                <NormalContactInput placeHolder={'Phone No. e.g. +989125000000'} inputOnchange={inputOnchange}
                                    property={"phone"}/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message *'
                          onChange={e => inputOnchange(e.target.value, "message")}
                          style={lightTheme ? {} : {background: "#d2d3d3"}}/>
                {error.message ? <span style={{color: "red", textAlign: "left"}}>{error.message}</span> : ""}
                <ButtonContactMe content={'Send Me'}/>
            </form>

            <div className='signature'>

                <div className='footerTextContainer'>
                    <div className='footerText'>
                        <p>I know how important the details are for a Front End Developer. My keen attention to detail
                            and
                            dedication to solving any problem at hand are what separates me from other candidates with
                            similar qualifications. If you agree that I’d be a good fit for your organization, I would
                            love
                            to schedule an interview at your earliest convenience.
                        </p>
                        <p>I can be reached anytime via my cell phone, <a>+989199001193</a> or by email
                            at <a>reza.kamely67@yahoo.com</a>.</p>
                        <p>Best regards,</p>
                        <div className='iconFooter'>
                            <h4>Follow Me : </h4>
                            <AiOutlineLinkedin data-aos="fade-up" />
                            <BsGithub data-aos="fade-up" data-aos-delay='100'/>
                            <AiOutlineMail data-aos="fade-up" data-aos-delay='200'/>
                            <BiPhoneCall data-aos="fade-up" data-aos-delay='300'/>
                        </div>
                    </div>
                    <img src={myPic} alt=""/>
                </div>
                <span style={{textAlign: "left"}}>Designed By Reza Kameli @2022</span>
            </div>

        </div>
    );
}

export default Footer;
