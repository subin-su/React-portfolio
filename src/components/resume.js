import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              
            </div>

            <h2 style={{paddingTop: '2em'}}>Sudan Bhusal</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I have completed my some college courses and I am currently studying a full-stack development at UC-Berkely extension.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>California</p>
            <h5>Phone</h5>
            <p>(575)-302-6604</p>
            <h5>Email</h5>
            <p>sudanbhusal20215@gmail.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2017}
              schoolName="University of southern mississippi"
              schoolDescription="I have completed some course in mississippi and transfered to a diffenet college."
               />

               <Education
                 startYear={2017}
                 endYear={2019}
                 schoolName="Northlake college"
                 schoolDescription="I have completed some collges courses and move to california and started the bootcamp as I am very eager to learn programming language."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="First Job"
              jobDescription="I worked as cashier as I enjoy interacting with people after certain time I left the job because of covid."
              />

              <Experience
                startYear={2020}
                endYear={2021}
                jobName="Second Job"
                jobDescription="Currently I am doing delivery driver and going to university."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
