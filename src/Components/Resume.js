// import { Link } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';
import React from 'react';
import './Resume.css';
import pdf from '../FakeData/resume.pdf'

const Resume = () => {
    return (

        <div className='row flex-v-align header-wraper'>
            <div className='col-sm-10 col-md-5 col-lg-5 bg-dark progress-bar mx-3 p-4'>
                <h4>Coding Skills</h4><br />
                <div style={{ marginRight: '30em', height: '2em' }}>React.Js</div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>
                <div style={{ marginRight: '30em', height: '2em' }}>JavaScript</div>
                <div class="progress">
                    <div class="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
                <div style={{ marginRight: '30em', height: '2em' }}>Express.Js</div>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                </div>
                <div style={{ marginRight: '30em', height: '2em' }}>MongoDB</div>
                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>
                <div style={{ marginRight: '30em', height: '2em' }}>CSS</div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
                <div style={{ marginRight: '30em', height: '2em' }}>HTML</div>
                <div class="progress">
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>

            </div>
            <div className='col-sm-10 col-md-5 col-lg-5 bg-dark text-white mx-3 mt-4 pt-4 mb-4' style={{ opacity: '.9', minHeight: '76vh' }}>
                <h4 className>Experiences</h4><br />
                <div >
                    <h5>Jan'2021 - Present</h5>
                    <p className='body-font'>Successfully Completed Web Development couse in Programming Hero. Where I learnt React, Javascript, Node, Express, MongoDB, Redux, CSS, HTML etc.</p>
                    <h5 className='mt-4'>Sept'2019 - Jan'2020</h5>
                    <p className='body-font'>Completed Web Design & Development course for BKTTC, Chittagon. Where I learnt Javascript, HTML, CSS, Wordpress</p>
                </div>
                <div className='home-buttons' >
                    <Link to={pdf} target="_blank" download className='btn btn-secondary'>Download Resume</Link>
                </div>

            </div>
        </div>


    );
};

export default Resume;