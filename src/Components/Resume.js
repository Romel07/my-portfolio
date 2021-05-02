import React from 'react';
import './Resume.css';

const Resume = () => {
    return (

        <div className='row flex-v-align header-wraper'>
            <div className='col-sm-12 col-md-6 col-lg-6 progress-bar p-4'>
                <h4>Coding Skills</h4><br/>
                <div style={{marginRight:'30em', height:'2em' }}>React.Js</div>
                <div class="progress">                
                    <div class="progress-bar bg-success" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>
                <div style={{marginRight:'30em', height:'2em' }}>JavaScript</div>
                <div class="progress">
                    <div class="progress-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
                <div style={{marginRight:'30em', height:'2em' }}>Express.Js</div>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                </div>
                <div style={{marginRight:'30em',height:'2em'}}>MongoDB</div>
                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>
                <div style={{marginRight:'30em',height:'2em'}}>CSS</div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
                <div style={{marginRight:'30em',height:'2em'}}>HTML</div>
                <div class="progress">
                    <div class="progress-bar bg-dark" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>

            </div>
            <div className='col-sm-12 col-md-6 col-lg-6'>
            <h4 className='mt-5 pt-4'>Experiences</h4><br/>
                <div className='home-photo'>
                    <div className='hp-inner background-position'>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Resume;