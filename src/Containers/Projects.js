import React, {useContext} from "react";
import SegmentTitle from "../Components/SegmentTitle";
import projects from "../Assets/Projects.png";

import ButtonContactMe from "../Components/Button/ButtonContactMe";
import SwitchContext from "../Context/ThemeSwitch";

import './Projects.scss';

function Projects() {
    const {lightTheme} = useContext(SwitchContext);

    return (
        <section className='Projects'>
            <SegmentTitle title={"Projects"} src={projects} alt={'projects'}/>
            <div className='projectsContent' style={lightTheme ? {} : {background: "radial-gradient(circle, rgb(9 17 18) 0%, rgb(21 42 42 / 28%) 100%)"}} >
                <div className='projectsCard' style={lightTheme ? {} : {boxShadow: '0px 0px 15px -9px #077e5c'} } >
                    <img src={projects} alt=""/>
                    <div>
                        <h3 data-aos="fade-up" data-aos-duration='500' style={lightTheme ? {} : {color: "#a9a9a9"}} >Panel dashboard | React JS </h3>
                        <p data-aos="fade-up" data-aos-duration='500' style={lightTheme ? {} : {color: "#a9a9a9"}}  >It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using 'Content here, content here', making it look like
                            readable English.</p>
                        <ButtonContactMe content={'Look it'} width={'30%'} height={'50px'}/>
                    </div>
                </div>
                <div className='projectsCard' style={lightTheme ? {} : {boxShadow: '0px 0px 15px -9px #077e5c'} }>
                    <img src={projects} alt=""/>
                    <div>
                        <h3 data-aos="fade-up" data-aos-duration='500' style={lightTheme ? {} : {color: "#a9a9a9"}}  >Payment services website | Next JS</h3>
                        <p data-aos="fade-up" data-aos-duration='500' style={lightTheme ? {} : {color: "#a9a9a9"}}  >It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using 'Content here, content here', making it look like
                            readable English.</p>
                        <ButtonContactMe content={'Look it'} width={'30%'} height={'50px'}/>

                    </div>
                </div>
                <div className='projectsCard' style={lightTheme ? {} : {boxShadow: '0px 0px 15px -9px #077e5c'} }>
                    <img src={projects} alt=""/>
                    <div>
                        <h3 data-aos="fade-up" data-aos-duration='500' style={lightTheme ? {} : {color: "#a9a9a9"}}  >Panel dashboard | React JS</h3>
                        <p data-aos="fade-up" data-aos-duration='500' style={lightTheme ? {} : {color: "#a9a9a9"}}  >It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using 'Content here, content here', making it look like
                            readable English.</p>
                        <ButtonContactMe content={'Look it'} width={'30%'} height={'50px'}/>

                    </div>
                </div>
            </div>

        </section>
    );
}

export default Projects;
