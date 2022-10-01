import React, {useContext} from "react";
import SegmentTitle from "../Components/SegmentTitle";
import projects from "../Assets/Projects.png";
import starPayProject from "../Assets/starPayProject.png"
import ButtonContactMe from "../Components/Button/ButtonContactMe";
import SwitchContext from "../Context/ThemeSwitch";

import './Projects.scss';

function Projects() {
    const {lightTheme} = useContext(SwitchContext);

    return (
        <section className='Projects'>
            <SegmentTitle title={"Projects"} src={projects} alt={'projects'}/>
            <div className='projectsContent'
                 style={lightTheme ? {} : {background: "radial-gradient(circle, rgb(9 17 18) 0%, rgb(21 42 42 / 28%) 100%)"}}>
                <div className='projectsCard' style={lightTheme ? {} : {boxShadow: '0px 0px 15px -9px #077e5c'}}>
                    <img src={projects} alt=""/>
                    <div>
                        <h3 data-aos="fade-up" data-aos-duration='500'
                            style={lightTheme ? {} : {color: "#a9a9a9"}}>Sales reporting panel | React JS </h3>
                        <p data-aos="fade-up" data-aos-duration='500' style={lightTheme ? {} : {color: "#a9a9a9"}}>
                            A sales report panel by a collection of metrics, quantitative data and qualitative inputs
                            that
                            helps to evaluate sales performance within a team, region, division or organization.
                            This site helps sales managers and their team members to understand better how they are
                            performing.
                        </p>
                        <ButtonContactMe href={"https://panel-zeta-virid.vercel.app/"} content={'Look it'} width={'30%'}
                                         height={'50px'}/>
                    </div>
                </div>
                <div className='projectsCard' style={lightTheme ? {} : {boxShadow: '0px 0px 15px -9px #077e5c'}}>
                    <img src={starPayProject} alt=""/>
                    <div>
                        <h3 data-aos="fade-up" data-aos-duration='500'
                            style={lightTheme ? {} : {color: "#a9a9a9"}}>Payment services website | Next JS</h3>
                        <p data-aos="fade-up" data-aos-duration='500' style={lightTheme ? {} : {color: "#a9a9a9"}}>
                            The online payment portal is one of our services, which is built to improve the
                            financial process of small and large businesses by selling their products compared to other
                            methods such as on-site payment.
                        </p>
                        <ButtonContactMe href={"https://star-pay-next-jjq8-o2o0l4yxj-rkamely.vercel.app/"}
                                         content={'Look it'} width={'30%'} height={'50px'}/>
                    </div>
                </div>
                {/*<div className='projectsCard' style={lightTheme ? {} : {boxShadow: '0px 0px 15px -9px #077e5c'}}>*/}
                {/*    <img src={projects} alt=""/>*/}
                {/*    <div>*/}
                {/*        <h3 data-aos="fade-up" data-aos-duration='500'*/}
                {/*            style={lightTheme ? {} : {color: "#a9a9a9"}}>Panel dashboard | React JS</h3>*/}
                {/*        <p data-aos="fade-up" data-aos-duration='500' style={lightTheme ? {} : {color: "#a9a9a9"}}>It is*/}
                {/*            a long established fact that a reader will be distracted by the readable content of a page*/}
                {/*            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less*/}
                {/*            normal*/}
                {/*            distribution of letters, as opposed to using 'Content here, content here', making it look*/}
                {/*            like*/}
                {/*            readable English.</p>*/}
                {/*        <ButtonContactMe content={'Look it'} width={'30%'} height={'50px'}/>*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </section>
    );
}

export default Projects;
