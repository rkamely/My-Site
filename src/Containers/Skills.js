import React from "react";
import SegmentTitle from "../Components/SegmentTitle";
import DownloadButton from "../Components/Button/DownloadButton";

import './Skills.scss';
import skills from "../Assets/skills.png";


function Skills() {

    return (
        <section className='Skills'>
            <SegmentTitle title={"Skills"} src={skills} alt={'Skills'}/>
            <div className='skillItems'>
                <div className='item'>
                    <div className='shadow'/>
                    <div className='number'><span>1</span></div>
                    <div className='contentSkills'>
                        <h1>React JS</h1>
                        <h3>An open-source JavaScript library that is used for building user interfaces specifically for
                            single-page applications
                        </h3>
                    </div>
                </div>

                <div className='item2'>
                    <div className='shadow2'/>
                    <div className='number2'><span>2</span></div>
                    <div className='contentSkills'>
                        <h1>Javascript</h1>
                        <h3>JavaScript is a text-based programming language used both on the client-side and server-side
                            that allows you to make web pages interactive.</h3>
                    </div>
                </div>

                <div className='item'>
                    <div className='shadow'/>
                    <div className='number'><span>3</span></div>
                    <div className='contentSkills'>
                        <h1>CSS3-SASS-Emotion</h1>
                        <h3>Cascading Style Sheets is a stylesheet language used to describe the presentation of a
                            document written in HTML or XML.</h3>
                    </div>
                </div>

                <div className='item2'>
                    <div className='shadow2'/>
                    <div className='number2'><span>4</span></div>
                    <div className='contentSkills'>
                        <h1>HTML 5</h1>
                        <h3>HTML (HyperText Markup Language) is the most basic building block of the Web</h3>
                    </div>
                </div>
                <div className='item'>
                    <div className='shadow'/>
                    <div className='number'><span>5</span></div>
                    <div className='contentSkills'>
                        <h1>Redux - Context</h1>
                        <h3>Redux is simply a store to store the state of the variables in your app, Redux and Context
                            are a state manager.</h3>
                    </div>
                </div>

                <div className='item2'>
                    <div className='shadow2'/>
                    <div className='number2'><span>6</span></div>
                    <div className='contentSkills'>
                        <h1>Other Skills</h1>
                        <h3>Material Ui, Git, npm, Next JS, Photoshop, SEO, Office, Google analysis tools, ...</h3>
                    </div>
                </div>
            </div>
            <DownloadButton/>
        </section>
    );
}

export default Skills;
