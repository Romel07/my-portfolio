import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import './Home.css'
import pdf from '../FakeData/resume.pdf'
import { Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';
// import ReactPDF from '@react-pdf/react-pdf';

const Home = () => {
    const home = {
        minHeight: '100vh',
        backgroundColor: "DodgerBlue",
        position: 'relative',
        zIndex: '1',
        // background: "url('../FakeData/resume-bg.jpg')",

    }

    return (
        <div className='row home-main' style={home} className="App">
            <div className='col-xs-12 col-sm-12 '>
                <div className='fw-col-inner'>
                    <div className='home-content'>
                        <div className='row flex-v-align flex-direction-reverse'>
                            <div className='col-sm-12 col-md-6 col-lg-6'>
                                <div className='home-photo'>
                                    <div className='hp-inner background-position'>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6'>
                                <div className='home-text'>
                                    <h1>Romel Barua Bakul</h1>
                                    {/* <h3>MERN Stack Developer | React Front End Developer | Full Stack Developer</h3> */}
                                    
                                    <Typed className='typed-text'
                                        strings={[
                                            'MERN Stack Developer ',
                                            'React Front End Developer',
                                            'Full Stack Developer'
                                        ]}
                                        typeSpeed={80}
                                        backSpeed={60}
                                        loop 
                                    />
                                   
                                    <br />
                                    <p>I am a quick learner Web Developer<br/> <strong>Expart in React.js, JavaScript, Node.js, MongoDB</strong> <br/> Comfortable with TypeScript, Redux, Bootstrap, Material UI, Firebase, Git, Next.js, Mongoose etc. </p>
                                    <div className='home-buttons'>
                                        <Link to={pdf} target="_blank" download className='btn btn-secondary'>Download Resume</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <h5 >Home Page</h5> */}
        </div>
    );
};

export default Home;