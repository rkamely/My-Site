import React from "react";
import SegmentTitle from "../../Components/SegmentTitle";
import Experience from "./Experience";

import './JobHistory.scss';
import experience from '../../Assets/experience.png'

function JobHistory() {

    return (
        <section className='experience'>
            <SegmentTitle title={"My Experience"} src={experience} alt={'My Experience'}/>
            <div className="parent">
                <div className='rightSide'>
                    <Experience jobTitle={'Frontend Developer'} company={'Setareh Aval'}
                                time={'2021-Present'}
                                Duties={
                                    <ul>
                                        <li> Translate wireframes, graphical mock-ups, and prototypes into working web
                                            pages.
                                        </li>
                                        <li>Develop and maintain single page application website in React JS
                                            environment.
                                        </li>
                                        <li>Develop and Implement landing pages for new campaigns by using Sass,
                                            Material UI, React Icon, … .
                                        </li>
                                        <li>Develop responsive Ui/UX interfaces.</li>
                                        <li>Monitor and optimize websites and application continuously to improve user
                                            experience and increase CRT.
                                        </li>
                                        <li>Implement new forms and modules based on sales and marketing department
                                            request.
                                        </li>
                                        <li>Implement Restful APIs in website.</li>
                                        <li>Upload new versions of project to Git repository for review and acceptance
                                            of team leader
                                        </li>
                                        <li>Use the most up to date standards and practices to assure the quality of the
                                            code.
                                        </li>
                                    </ul>
                                }
                                achivements={<ul>
                                    <li>Implemented setaresim.com based on React technology</li>
                                    <li>Implemented 3 responsive landing pages.</li>
                                    <li>Developed and maintained a panel dashboard for B2B team and Implemented
                                        multiple graphs upon request of the sales team.
                                    </li>
                                    <li>Implemented Cart by using redux technology.</li>
                                    <li>Implemented Google map API.</li>
                                    <li>Optimized websites for maximum speed and scalability.</li>
                                </ul>}
                                img={"https://kamapress.com/wp-content/uploads/2019/11/%D8%AF%DB%8C-%D8%AC%DB%8C-%DA%A9%D8%A7%D9%84%D8%A7-.jpg"}/>
                </div>
                <div className='leftSide'>
                    <div className="left1">
                        <Experience jobTitle={'Digital Marketing Specialist'} company={'Setareh Aval'}
                                    time={'2016-2021'}
                                    Duties={<ul>
                                        <li>
                                            Responsible for executing digital advertising campaigns in addition to
                                            assisting with the development of digital marketing strategies
                                        </li>

                                        <li> Continually test, analyze and optimize target criteria, content, landing
                                            pages to increase open, click and conversion rates.
                                        </li>
                                        <li> Consult, design, implement and publish responsive designed registration web
                                            pages and templates to support marketing.
                                        </li>
                                        <li> Used Google Analytics to track the effectiveness of social media
                                            initiatives. Optimization of Social media campaigns
                                        </li>
                                        <li> Expert in using web analytics tools like Google analytics, Web Trends in
                                            order to analyze Traffic trends, Visitor behavior, and measure success of
                                            SEO/SEM/PPC campaigns.
                                        </li>
                                        <li> Produced monthly performance reports for clients for SEM programs utilizing
                                            reporting tools such as Google Analytics; determined key metrics that were
                                            of primary importance to clients and provided trending data to compare
                                            results month-by-month.
                                        </li>


                                    </ul>}
                                    achivements={<ul>
                                        <li> Implemented SEO strategies for client websites including layout, content
                                            optimization, keyword structuring, etc.
                                        </li>
                                        <li>
                                            Set up Google Adwords advertising campaigns including keywords and campaign
                                            filters for future marketing opportunities.
                                        </li>
                                        <li>Implemented ECRM system for sending email and SMS based on our algorithm to
                                            returning them in website
                                        </li>
                                    </ul>}
                                    img={"https://kamapress.com/wp-content/uploads/2019/11/%D8%AF%DB%8C-%D8%AC%DB%8C-%DA%A9%D8%A7%D9%84%D8%A7-.jpg"}/>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default JobHistory;
