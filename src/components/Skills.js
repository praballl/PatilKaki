/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import { Container} from 'react-bootstrap'

import colorSharp from '../assets/img/color-sharp.png'
import colorSharp2 from '../assets/img/color-sharp2.png'

import htmlLogo from '../assets/img/html-5.png'
import cssLogo from '../assets/img/css-3.png'
import jsLogo from '../assets/img/js.png'
import rectLogo from '../assets/img/reactLogo.png'
import nodeLogo from '../assets/img/nodeJs.png'
import ExpressLogo from '../assets/img/express.png'
import mongoLogo from '../assets/img/mongoImg.png'
import sqlLogo from '../assets/img/sqlImg.png'



const Skills = () => {
      return (
        <section className="skill" id="skills">
            <img className="background-image-right" src={colorSharp2} alt="Image" />
            <Container style={{
              backgroundColor:'black',
             marginTop:'60px',
             borderRadius: '30px',
             padding: '5% 8%' }}>
              <h2  className='text-center' style={{color:'white'}}>About Me</h2>
              <br></br>
            <div className="row">
              <div className="col-md-6 text-center">
                {/* Content for the first column in the first row */}
                <h2 style={{color:'white'}}>Professional</h2>
                {/* <p>This is the content of the first column in the first row.</p> */}
                <div >
                <p>
        Hi there! I'm Prabal Namdeo, a passionate Web Developer based in Jabalpur (MP). With a background in conputer science, I specialize in front-end, back-end, more specifically in MERN.
      </p>
      <p> 
        My journey in computer science began 2 years ago, and I've had the opportunity to do a masters in computer application. I'm dedicated to my problem solving skills and buildig unique projects.
      </p>
      
                    </div>
              </div>
              <div className="col-md-6 text-center">
                
                <h2 style={{color:'white'}}> Me Time</h2>
                <p>
        When I'm not Creating, you can find me playing cricket, writing poems, drwing sketches. I really enjoy all the fun activity like clubing with close ones and chilling with friends!
      </p>

      <p>
        I am a firm believer in the profound influence that taking a moment to rejuvenate oneself can have on enhancing productivity, expanding cognitive faculties, and cultivating a positive mental disposition.
      </p>
              </div>
            </div>

            
            
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )
    }

export default Skills
