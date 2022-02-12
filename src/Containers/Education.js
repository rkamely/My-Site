import React from "react";
import SegmentTitle from "../Components/SegmentTitle";
import KharazmiLogo from './../Assets/KharazmiLogo.png'
import AzzadUni from './../Assets/AzadUniversity.png'
import './Education.scss';

import education from "../Assets/education.png";


function Education() {

    return (
        <section className='Education'>
            <SegmentTitle title={"Education"} src={education} alt={'Education'}/>
            <div className='universities'>
                <img className='uniLogo'
                     src={KharazmiLogo}
                     alt=""/>
                <div className='descriptions'>
                    <h3>Kharazmi University</h3>
                    <h4>Master Business Administration</h4>
                    <h5>Master Degree</h5>
                    <h6>2020 - 2022</h6>
                    <p>Kharazmi University is a major public research university in Iran, named after Khwarizmi (c.
                        780–850), Persian mathematician, astronomer and geographer, offering a wide range of
                        undergraduate and postgraduate programs in a variety of disciplines. Kharazmi University is
                        considered as the oldest institution of higher education in Iran. It was established in 1919 as
                        the Central Teachers' Institute and gained university status as Tarbiat Moallem University of
                        Tehran in 1974. It changed its name to Kharazmi University on January 31, 2012.
                    </p>
                </div>
            </div>
            <div className='universities'>

                <div className='descriptions'>
                    <h3>Islamic Azad University, North Tehran Branch</h3>
                    <h4>Industrial Engineering</h4>
                    <h5>Bachelor Degree</h5>
                    <h6>2007 - 2012</h6>
                    <p>
                        The Islamic Azad University, North Tehran Branch is a branch of the Islamic Azad University. It
                        was founded in 1985 and currently has an enrollment of 34,864 students. The university offers
                        bachelor's degrees, master's degrees and Ph.D.s in 10 colleges. It is located in
                        Hakimiyeh-Tehran Pars, Tehran. The educational area of the university is 35,000 square metres.
                    </p>
                </div>
                <img className='uniLogo'
                     src={AzzadUni}
                     alt=""/>
            </div>

        </section>
    );
}

export default Education;
